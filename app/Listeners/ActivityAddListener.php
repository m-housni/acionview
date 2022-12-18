<?php
namespace App\Listeners;

use App\Events\Event;
use App\Events\FileUploadEvent;
use App\Events\FileDelEvent;
use App\Events\IssueEvent;
use App\Events\VersionEvent;
use App\Events\SprintEvent;
use App\Events\WikiEvent;
use App\Events\DocumentEvent;
use App\Events\DcoumentEvent;
use App\Events\ModuleEvent;
use App\Project\Provider;

use App\Project\Eloquent\File;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use DB;

class ActivityAddListener 
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  FileChangeEvent  $event
     * @return void
     */
    public function handle(Event $event)
    {
        // this activity_id is used for notice

        if ($event instanceof FileUploadEvent)
        {
            $activity_id = $this->addFileActivity($event->project_key, $event->issue_id, $event->user, $event->file_id, 'add_file');
            $this->putMQ($event->project_key, $activity_id);
        }
        else if ($event instanceof FileDelEvent)
        {
            $activity_id = $this->addFileActivity($event->project_key, $event->issue_id, $event->user, $event->file_id, 'del_file');
            $this->putMQ($event->project_key, $activity_id);
        }
        else if ($event instanceof IssueEvent)
        {
            $activity_id = $this->addIssueActivity($event->project_key, $event->issue_id, $event->user, $event->param);
            $this->putMQ($event->project_key, $activity_id);
        }
        else if ($event instanceof DocumentEvent)
        {
            $activity_id = $this->addDocumentActivity($event->project_key, $event->document_id, $event->user, $event->param);
        }
        else if ($event instanceof VersionEvent || $event instanceof SprintEvent || $event instanceof WikiEvent)
        {
            if ($event instanceof VersionEvent)
            {
                if (!in_array(array_get($event->param, 'event_key', ''), [ 'release_version' , 'create_release_version' ]))
                {
                    return;
                }
                $activity_id = $this->addVersionActivity($event->project_key, $event->version_id, $event->user, $event->param);
            }
            else if ($event instanceof SprintEvent)
            {
                $activity_id = $this->addSprintActivity($event->project_key, $event->sprint_no, $event->user, $event->param);
            }
            else if ($event instanceof WikiEvent)
            {
                $activity_id = $this->addWikiActivity($event->project_key, $event->wiki_id, $event->user, $event->param);
            }

            if (isset($event->param['isSendMsg']) && $event->param['isSendMsg'])
            {
                $this->putMQ($event->project_key, $activity_id);
            }
        }
    }

    /**
     * add file activities.
     *
     * @param  string $project_key
     * @param  string $issue_id
     * @param  array  $user
     * @param  string $file_id
     * @param  string $event_key
     * @return void
     */
    public function addFileActivity($project_key, $issue_id, $user, $file_id, $event_key)
    {
        $file_info = File::find($file_id);
        if (!$file_info || $file_info->del_flg == 1)
        {
            return;
        }

        // insert activity into db.
        $info = [ 
            'issue_id' => $issue_id, 
            'event_key' => $event_key, 
            'user' => $user, 
            'data' => $file_info->name, 
            'created_at' => time() 
        ];
        return DB::collection('activity_' . $project_key)->insertGetId($info);
    }

    /**
     * add version activities.
     *
     * @param  string $project_key
     * @param  string $version_id
     * @param  object $user
     * @param  array $param
     * @return void
     */
    public function addVersionActivity($project_key, $version_id, $user, $param)
    {
        $info = [
            'event_key' => $param['event_key'],
            'version_id' => $version_id,
            'user' => $user,
            'data' => isset($param['data']) ? $param['data'] : '',
            'created_at' => time()
        ];

        return DB::collection('activity_' . $project_key)->insertGetId($info);
    }

    /**
     * add document activities.
     *
     * @param  string $project_key
     * @param  string $document_id
     * @param  object $user
     * @param  array $param
     * @return void
     */
    public function addDocumentActivity($project_key, $document_id, $user, $param)
    {
        $info = [
            'event_key' => $param['event_key'],
            'document_id' => $document_id,
            'user' => $user,
            'data' => isset($param['data']) ? $param['data'] : '',
            'created_at' => time()
        ];

        return DB::collection('activity_' . $project_key)->insertGetId($info);
    }

    /**
     * add wiki activities.
     *
     * @param  string $project_key
     * @param  string $wiki_id
     * @param  object $user
     * @param  array $param
     * @return void
     */
    public function addWikiActivity($project_key, $wiki_id, $user, $param)
    {
        $info = [
            'event_key' => $param['event_key'],
            'wiki_id' => $wiki_id,
            'user' => $user,
            'data' => isset($param['data']) ? $param['data'] : '',
            'created_at' => time()
        ];

        return DB::collection('activity_' . $project_key)->insertGetId($info);
    }

    /**
     * add sprint activities.
     *
     * @param  string $project_key
     * @param  string $sprint_no
     * @param  object $user
     * @param  array $param
     * @return void
     */
    public function addSprintActivity($project_key, $sprint_no, $user, $param)
    {
        $info = [
            'event_key' => $param['event_key'],
            'sprint_no' => $sprint_no,
            'user' => $user,
            'data' => isset($param['data']) ? $param['data'] : '',
            'created_at' => time()
        ];

        return DB::collection('activity_' . $project_key)->insertGetId($info);
    }

    /**
     * add issue activities.
     *
     * @param  string $project_key
     * @param  object $user
     * @param  string $param
     * @return void
     */
    public function addProjectActivity($project_key, $user, $param)
    {
        $info = [ 
            'event_key' => $param['event_key'], 
            'user' => $user, 
            'data' => isset($param['data']) ? $param['data'] : '', 
            'created_at' => time() 
        ];

        if (isset($param['wiki_id']))
        {
            $info['wiki_id'] = $param['wiki_id'];
        }
        else if (isset($param['version_id']))
        {
            $info['version_id'] = $param['version_id'];
        }
        else if (isset($param['file_id']))
        {
            $info['file_id'] = $param['file_id'];
        }
        else if (isset($param['sprint_no']))
        {
            $info['sprint_no'] = $param['sprint_no'];
        }

        return DB::collection('activity_' . $project_key)->insertGetId($info);
    }

    /**
     * add issue activities.
     *
     * @param  string $project_key
     * @param  string $issue_id
     * @param  string $event_key
     * @param  object $user
     * @param  string $param
     * @return void
     */
    public function addIssueActivity($project_key, $issue_id, $user, $param)
    {
        $info = [];

        if (isset($param['snap_id']) && $param['snap_id'])
        {
            $diff_items = []; $diff_keys = [];

            $snaps = DB::collection('issue_his_' . $project_key)
                ->where('issue_id', $issue_id)
                ->orderBy('_id', 'desc')
                ->get();
            foreach ($snaps as $i => $snap)
            {
                if ($snap['_id']->__toString() != $param['snap_id'])
                {
                    continue;
                }

                $after_data = $snap['data'];
                $before_data = $snaps[$i + 1]['data'];
                foreach ($after_data as $key => $val)
                {
                    if (!isset($before_data[$key]) || $val !== $before_data[$key])
                    {
                        $tmp = [];
                        $tmp['field'] = isset($val['name']) ? $val['name'] : '';
                        $tmp['after_value'] = isset($val['value']) ? $val['value'] : '';
                        $tmp['before_value'] = isset($before_data[$key]['value']) ? $before_data[$key]['value'] : '';
			if ($tmp['after_value'] === $tmp['before_value'])
                        {
                            continue;
                        }

                        if (is_array($tmp['after_value']) && is_array($tmp['before_value']))
                        {
                            $diff1 = array_diff($tmp['after_value'], $tmp['before_value']);
                            $tmp['after_value'] = implode(',', $diff1);
                        }
                        else
                        {
                            if (is_array($tmp['after_value']))
                            {
                                $tmp['after_value'] = implode(',', $tmp['after_value']);
                            }
                        }
                        $diff_items[] = $tmp;
                        $diff_keys[] = $key;
                    }
                }

                foreach ($before_data as $key => $val)
                {
                    if (array_search($key, $diff_keys) !== false)
                    {
                        continue;
                    }
                    if (!isset($after_data[$key]) || $val !== $after_data[$key])
                    {
                        $tmp = [];
                        $tmp['field'] = isset($val['name']) ? $val['name'] : '';
                        $tmp['before_value'] = isset($val['value']) ? $val['value'] : '';
                        $tmp['after_value'] = isset($after_data[$key]['value']) ? $after_data[$key]['value'] : '';
			if ($tmp['after_value'] === $tmp['before_value'])
                        {
                            continue;
                        }

                        if (is_array($tmp['after_value']) && is_array($tmp['before_value']))
                        {
                            $diff1 = array_diff($tmp['after_value'], $tmp['before_value']);
                            $tmp['after_value'] = implode(',', $diff1);
                        }
                        else
                        {
                            if (is_array($tmp['after_value']))
                            {
                                $tmp['after_value'] = implode(',', $tmp['after_value']);
                            }
                        }
                        $diff_items[] = $tmp;
                    }
                }
                break;
            }
            if ($diff_items) 
            {
                // insert activity into db.
                $info = [ 
                    'issue_id' => $issue_id, 
                    'event_key' => $param['event_key'], 
                    'user' => $user, 
                    'data' => $diff_items, 
                    'created_at' => time() 
                ];
                return DB::collection('activity_' . $project_key)->insertGetId($info);
            }
        }
        else
        {
            $info = [ 
                'issue_id' => $issue_id, 
                'event_key' => $param['event_key'], 
                'user' => $user, 
                'data' => isset($param['data']) ? $param['data'] : '', 
                'created_at' => time() 
            ];
            return DB::collection('activity_' . $project_key)->insertGetId($info);
        }
        return '';
    }

    /**
     * add notice queue.
     *
     * @param  string $project_key
     * @param  string $activity_id
     * @return void
     */
    public function putMQ($project_key, $activity_id)
    {
        if (!$activity_id)
        {
            return;
        }

        $info = [ 
            'project_key' => $project_key, 
            'activity_id' => $activity_id->__toString(), 
            'flag' => 0, 
            'created_at' => time() 
        ];
        DB::collection('mq')->insert($info);
    }
}
