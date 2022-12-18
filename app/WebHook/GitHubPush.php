<?php

namespace App\WebHook;

use App\WebHook\GitPush;
use App\Sentinel\Sentinel;

class GitHubPush extends GitPush 
{
    /**
     * parse the data.
     *
     * @param  array $data
     * @return array
     */
    public function parse($data)
    {
    	// set the repo
        $repo = [];
        $repo['name'] = $data['repository']['name'];
        $repo['homepage'] = $data['repository']['html_url'];
        $this->repo = $repo;
        // set the branch
        $this->branch = isset($data['ref']) ? substr($data['ref'], 11) : ''; // refs/heads/
        // get the pusher 
        $user_name = isset($data['pusher']) && isset($data['pusher']['user_name']) ? $data['pusher']['user_name'] : '';
        $user_email = isset($data['pusher']) && isset($data['pusher']['user_email']) ? $data['pusher']['user_email'] : '';
        $user = [ 'name' => $user_name, 'email' => $user_email ];
        if ($user_email)
        {
    	    $user2 = Sentinel::findByCredentials([ 'email' => $user_email ]);
    	    if ($user2)
    	    {
    	        $user['id']     = $user2->id;
                $user['name']   = $user2->first_name;
    		$user['email']  = $user2->email;
    	    }
        }
        $this->pusher = $user;
        // set the commits
        $this->commits = isset($data['commits']) ? $data['commits'] : [];
        // get the after
        $this->after = isset($data['after']) ? $data['after'] : '';
        // get the before 
        $this->before = isset($data['before']) ? $data['before'] : '';
    }

    /**
     * arrange the data format.
     *
     * @param  array  $commit
     * @return array
     */
    public function arrangeCommit($commit)
    {
    	$new_commit = [];

        $new_commit['repo'] = $this->getRepo();
        $new_commit['branch'] = $this->getBranch();
        $new_commit['pusher'] = $this->getPusher();
        $new_commit['pushed_at'] = time();

    	$new_commit['sha']          = isset($commit['id']) ? $commit['id'] : '';
    	$new_commit['url']          = isset($commit['url']) ? $commit['url'] : '';
    	$new_commit['message']      = isset($commit['message']) ? trim($commit['message']) : '';
    	$new_commit['added']        = isset($commit['added']) ? $commit['added'] : [];
    	$new_commit['modified']     = isset($commit['modified']) ? $commit['modified'] : [];
    	$new_commit['removed']      = isset($commit['removed']) ? $commit['removed'] : [];
    	$new_commit['committed_at'] = isset($commit['timestamp']) ? strtotime($commit['timestamp']) : '';

    	if (isset($commit['author']))
    	{
    	    $new_commit['author'] = $commit['author'];
    	    if (isset($commit['author']['email']) && $commit['author']['email'])
    	    {
    	        $new_author = Sentinel::findByCredentials([ 'email' => $commit['author']['email'] ]);
    	        if ($new_author)
    	        {
    	            $new_commit['author']['id']     = $new_author->id;
                    $new_commit['author']['name']   = $new_author->first_name;
    		    $new_commit['author']['email']  = $new_author->email;
    		}
    	    }
    	}
    	else
    	{
    	    $new_commit['author'] = [];
    	}

    	return $new_commit;
    }
}
