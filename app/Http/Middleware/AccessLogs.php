<?php

namespace App\Http\Middleware;

use Illuminate\Http\JsonResponse;
use Closure;

use App\Sentinel\Sentinel;
use App\System\Eloquent\ApiAccessLogs;

class AccessLogs 
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
    	$start_at = floor(microtime(true) * 1000);
        // request body
        $response = $next($request);

    	$current_at = floor(microtime(true) * 1000);

        $user = null;
        $request_method = $request->method();
    	$request_url = $request->getRequestUri();
        $module = $project_key = '';
        $matches = [];
        if ($request_method == 'POST' && strpos($request_url, '/actionview/api/session') !== false)
        {
            $module = 'login';
            $res_body = $response->getData();
            if (isset($res_body->data->user) && $res_body->data->user)
            {
                $user = $res_body->data->user; 
            }
            else
            {
                return $response;
            }
        }
    	else 
        {
            $user = Sentinel::getUser();
            if (!$user)
            {
                return $response;
            }

            if (preg_match("/^\/actionview\/api\/project\/([^\/]+)\/([^\/\?]+)(.*)/i", $request_url, $matches))
    	    {
    	        $project_key = $matches[1];
    	        $module = $matches[2];
    	    }
        }

    	ApiAccessLogs::create([
    	    'user' => [ 'id' => $user->id, 'name' => $user->first_name, 'email' => $user->email ],
    	    'project_key' => $project_key,
    	    'module' => $module,
    	    'requested_start_at' => $start_at,
    	    'requested_end_at' => $current_at,
    	    'exec_time' => $current_at - $start_at,
    	    'request_source_ip' => $request->ip(),
    	    'request_url' => $request_url,
    	    'request_user_agent' => $request->header('USER_AGENT'),
    	    'request_method' => $request_method,
    	    'request_body' => in_array($request_method, [ 'PUT', 'POST' ]) ? array_except($request->all(), [ 'password', 'new_password', 'token', 'pwd', 'admin_password' ]) : [],
    	    'response_status' => $response->getstatusCode(),
    	]);

        return $response;
    }
}
