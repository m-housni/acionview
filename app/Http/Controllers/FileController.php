<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;

use App\Http\Controllers\Controller;
use App\Project\Eloquent\File;
use App\Events\FileUploadEvent;
use App\Events\FileDelEvent;
use App\Utils\File as FileUtil;
use DB;

class FileController extends Controller
{
    /**
     * Upload file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  String  $project_key
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request, $project_key)
    {
        set_time_limit(0);

        if (!is_writable(config('filesystems.disks.local.root', '/tmp')))
        {
            throw new \UnexpectedValueException('the user has not the writable permission to the directory.', -15103);
        }
        if (empty($_FILES))
        {
            throw new \UnexpectedValueException('upload file errors.', -15101);
        }

        $thumbnail_size = 200;
        $uploaded_files = [];
        foreach ($_FILES as $field => $tmpfile)
        {
            if ($tmpfile['error'] > 0)
            {
                continue;
            }

            $basename = md5(microtime() . $tmpfile['name']);
            $sub_save_path = config('filesystems.disks.local.root', '/tmp') . '/' . substr($basename, 0, 2) . '/';
            if (!is_dir($sub_save_path))
            {
                @mkdir($sub_save_path);
            }
            $filename = '/tmp/' . $basename;
            move_uploaded_file($tmpfile['tmp_name'], $filename);

            $data = [];
            $data['name']    = $tmpfile['name'];
            $data['size']    = $tmpfile['size'];
            $data['type']    = $tmpfile['type'];
            $data['index']   = $basename; 
            if (in_array($tmpfile['type'], [ 'image/jpeg', 'image/jpg', 'image/png', 'image/gif' ]))
            {
                $size = getimagesize($filename);
                $width = $size[0]; $height = $size[1];
                $scale = $width < $height ? $height : $width;
                $thumbnails_width = floor($thumbnail_size * $width / $scale);
                $thumbnails_height = floor($thumbnail_size * $height / $scale);
                $thumbnails_filename = $filename . '_thumbnails';
                if ($scale <= $thumbnail_size)
                {
                    @copy($filename, $thumbnails_filename);
                }
                else if ($tmpfile['type'] == 'image/jpeg' || $tmpfile['type'] == 'image/jpg')
                {
                    $src_image = imagecreatefromjpeg($filename);
                    $dst_image = imagecreatetruecolor($thumbnails_width, $thumbnails_height);
                    imagecopyresized($dst_image, $src_image, 0, 0, 0, 0, $thumbnails_width, $thumbnails_height, $width, $height);
                    imagejpeg($dst_image, $thumbnails_filename);
                }
                else if ($tmpfile['type'] == 'image/png')
                {
                    $src_image = imagecreatefrompng($filename);
                    $dst_image = imagecreatetruecolor($thumbnails_width, $thumbnails_height);
                    imagecopyresized($dst_image, $src_image, 0, 0, 0, 0, $thumbnails_width, $thumbnails_height, $width, $height);
                    imagepng($dst_image, $thumbnails_filename);
                }
                else if ($tmpfile['type'] == 'image/gif')
                { 
                    $src_image = imagecreatefromgif($filename);
                    $dst_image = imagecreatetruecolor($thumbnails_width, $thumbnails_height);
                    imagecopyresized($dst_image, $src_image, 0, 0, 0, 0, $thumbnails_width, $thumbnails_height, $width, $height);
                    imagegif($dst_image, $thumbnails_filename);
                }
                else 
                {
                    @copy($filename, $thumbnails_filename);
                }
                $data['thumbnails_index'] = $basename . '_thumbnails';
                // move the thumbnails
                @rename($thumbnails_filename, $sub_save_path . $data['thumbnails_index']);
            }

            // move original file
            @rename($filename, $sub_save_path . $basename);
            $data['uploader'] = [ 'id' => $this->user->id, 'name' => $this->user->first_name, 'email' => $this->user->email ];
            $file = File::create($data);

            $uploaded_files[] = $file;

            $issue_id = $request->input('issue_id');
            if (isset($issue_id) && $issue_id)
            {
                Event::fire(new FileUploadEvent($project_key, $issue_id, $field, $file->id, $data['uploader']));
            }
        }

        if (count($uploaded_files) > 1) 
        {
            $data = [];
            foreach ($uploaded_files as $file) 
            {
                $data[] = [ 'file' => $file, 'filename' => '/actionview/api/project/' . $project_key . '/file/' . $file->id ];
            }
            return Response()->json([ 'ecode' => 0, 'data' => $data ]);
        }
        else 
        {
            $file = array_pop($uploaded_files);
            $data = [ 'field' => $field, 'file' => $file, 'filename' => '/actionview/api/project/' . $project_key . '/file/' . $file->id ];
            return Response()->json([ 'ecode' => 0, 'data' => $data ]);
        }
    }

    /**
     * Download small image file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  String $id
     */
    public function downloadThumbnail(Request $request, $project_key, $id)
    {
        $file = File::find($id);
        $filepath = config('filesystems.disks.local.root', '/tmp') . '/' . substr($file->index, 0, 2);
        $filename = $filepath . '/' . $file->thumbnails_index;

        if (!file_exists($filename))
        {
            throw new \UnexpectedValueException('file does not exist.', -15100);
        }

        FileUtil::download($filename, $file->name);
    }

    /**
     * Download file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  String $id
     */
    public function download(Request $request, $project_key, $id)
    {
        set_time_limit(0);

        $file = File::find($id); 
        if (!$file || $file->del_flg == 1)
        {
            throw new \UnexpectedValueException('file does not exist.', -15100);
        }

        $filepath = config('filesystems.disks.local.root', '/tmp') . '/' . substr($file->index, 0, 2);
        $filename = $filepath . '/' . $file->index;
        if (!file_exists($filename))
        {
            throw new \UnexpectedValueException('file does not exist.', -15100);
        }

        if ($file->type == 'application/pdf')
        {
            FileUtil::pdfPreview($filename, $file->name);
        }
        else
        {
            FileUtil::download($filename, $file->name);
        }
    }

    /**
     * get avatar file.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function getAvatar(Request $request)
    {
        $fid = $request->input('fid');
        if (!isset($fid) || !$fid)
        {
            throw new \UnexpectedValueException('the avatar file id cannot empty.', -15100);
        }

        $filename = config('filesystems.disks.local.root', '/tmp') . '/avatar/' . $fid;
        if (!file_exists($filename))
        {
            throw new \UnexpectedValueException('the avatar file does not exist.', -15100);
        }

        FileUtil::download($filename, $filename);
    }

    /**
     * Delete file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  String $project_key
     * @param  String $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $project_key, $id)
    {
        $file = File::find($id);
        //if (!file || $file->del_flg == 1)
        //{
        //    throw new \UnexpectedValueException('file does not exist.', -15100);
        //}

        if ($file && !$this->isPermissionAllowed($project_key, 'remove_file') && !($this->isPermissionAllowed($project_key, 'remove_self_file') && $file->uploader['id'] == $this->user->id)) 
        {
            return Response()->json(['ecode' => -10002, 'emsg' => 'permission denied.']);
        }

        $issue_id = $request->input('issue_id');
        $field_key = $request->input('field_key');
        if (isset($issue_id) && $issue_id && isset($field_key) && $field_key)
        {
            $user = [ 'id' => $this->user->id, 'name' => $this->user->first_name, 'email' => $this->user->email ];
            Event::fire(new FileDelEvent($project_key, $issue_id, $field_key, $id, $user));
        }

        // logically deleted
        if ($file)
        {
            $file->fill([ 'del_flg' => 1 ])->save();
        }

        $issue = DB::collection('issue_' . $project_key)->where('_id', $issue_id)->first();
        if (array_search($id, $issue[$field_key]) === false)
        {
            return Response()->json(['ecode' => 0, 'data' => ['id' => $id]]);
        }
        else
        {
            throw new \UnexpectedValueException('file deletion failed.', -15102);
        }
    }

    /**
     * Upload temporary file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function uploadTmpFile(Request $request)
    {
        set_time_limit(0);

        if (empty($_FILES) || $_FILES['file']['error'] > 0)
        {
            throw new \UnexpectedValueException('upload file errors.', -15101);
        }

        $basename = md5(microtime() . $_FILES['file']['name']);
        $sub_save_path = config('filesystems.disks.local.root', '/tmp') . '/' . substr($basename, 0, 2) . '/';
        if (!is_dir($sub_save_path))
        {
            @mkdir($sub_save_path);
        }
        $filename = '/tmp/' . $basename;
        move_uploaded_file($_FILES['file']['tmp_name'], $filename);

        // move original file
        @rename($filename, $sub_save_path . $basename);
        $data['uploader'] = [ 'id' => $this->user->id, 'name' => $this->user->first_name, 'email' => $this->user->email ];
        $file = File::create($data);

        return Response()->json([ 'ecode' => 0, 'data' => [ 'fid' => $basename, 'fname' => $_FILES['file']['name'] ] ]);
    }
}
