<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class BusinessHours
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
       
        $timezone = config('app.timezone', 'Asia/Manila');

        /**
         * Note: Uncomment this for testing
         * Force test time (example: 8 AM)
         */
        // Carbon::setTestNow(Carbon::now($timezone)->setTime(8, 0));

        $hour = now($timezone)->hour;

        if ($hour < 9 || $hour >= 17) {
            
            return Inertia::render('Error/BusinessHours', [
                'message' => 'This page is only available between 9:00am-5:00pm.'
            ])
            ->toResponse($request)
            ->setStatusCode(403);
        }

        return $next($request);
    }
}
