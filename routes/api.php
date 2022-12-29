<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


//__Login Routes
Route::post('/login','App\Http\Controllers\Api\AuthController@login');

//__Register
Route::post('/register','App\Http\Controllers\Api\AuthController@register');

//__Forgot Pass
Route::post('/forgotpassword','App\Http\Controllers\Api\ForgotController@forgotPassword');

//__Reset Pass
Route::post('/resetpassword','App\Http\Controllers\Api\ForgotController@resetPassword');

//__Current User
Route::get('/user','App\Http\Controllers\Api\UserController@user')->middleware('auth:api');
