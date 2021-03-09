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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');


    Route::post('logout', 'AuthController@logout');

    Route::get('utilisateur', 'UserController@getUser');
    Route::get('page/utilisateurs/{size}', 'UserController@getUserPageable');
    Route::get('utilisateur/{id}', 'UserController@getUserById');
    Route::post('adduser', 'UserController@addUser');
    Route::put('updateUser/{id}', 'UserController@updateUser');
    Route::delete('deleteUser/{id}', 'UserController@deleteUser');
});
