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

    Route::get('utilisateur', ['middleware' => 'auth.role:administrateur,utilisateur', 'uses' => 'UserController@getUser']);
    Route::get('page/utilisateurs/{size}', 'UserController@getUserPageable');
    Route::get('utilisateur/{id}', 'UserController@getUserById');
    Route::post('adduser', 'UserController@addUser');
    Route::put('updateUser/{id}', 'UserController@updateUser');
    Route::delete('deleteUser/{id}', ['middleware' => 'auth.role:administrateur', 'uses' => 'UserController@deleteUser']);
    Route::get('search/{name}', 'UserController@search');
    Route::get('searchuser', 'UserController@searchuser');

    Route::get('getUser', 'UserController@getUser');


    Route::get('agence', 'AgencesController@getagence');
    Route::get('agence/{id}', 'AgencesController@getagenceById');
    Route::post('addagences', 'AgencesController@addagences');
    Route::put('updagences/{id}', 'AgencesController@updagences');
    Route::delete('deleteagences/{id}', 'AgencesController@deleteagences');

    Route::get('filesf', 'conditionController@getfiles');
    Route::post('uploadf', 'conditionController@upload');

    Route::get('filesd', 'documentController@getfiles');
    Route::post('uploadd', 'documentController@upload');
    Route::delete('deletedoc/{id}', 'documentController@deletedocument');

    Route::post('addChallenges', 'ChallengeController@addChallenges');
    Route::get('getchallenge', 'ChallengeController@getchallenge');

    Route::post('addChallengesAgences/{id}', 'ChallengeAgenceController@addChallengesToAllAgences');
    Route::put('updatechallangeagence/{idagence}/{idchallance}', 'ChallengeAgenceController@changeRankForOneAgence');

    Route::post('addevent', 'EventController@addevent');
    Route::post('uploadevent', 'EventController@upload');
    Route::get('showimg', 'EventController@showimg');
    Route::delete('deleteEvent/{id}', 'EventController@deleteEvent');
    Route::get('getevent','EventController@getevent');
    Route::get('evenement/{id}', 'EventController@getEventById');


    Route::post('affecterusertoevent/{iduser}/{idevent}', 'AbonnerController@addUserToEvent');
    Route::delete('annulation/{iduser}/{idevent}', 'AbonnerController@annulationAbonnement');
    Route::get('getallabonner/{idevent}', 'AbonnerController@getAllabonne');


    Route::get('convention', 'ConventionController@getConv');
    Route::post('uploadConv', 'ConventionController@uploadConv');
    Route::delete('deleteconvention/{id}', 'ConventionController@deleteconvention');

    Route::get('getCategorieById/{id}', 'CategoryController@getCategorieById');
    Route::post('addCategorie', 'CategoryController@addCategorie');
    Route::put('updateCategorie/{id}','CategoryController@updateCategorie');
    Route::get('getcategory', 'CategoryController@getcategory');
    Route::delete('deleteCategorie/{id}', 'CategoryController@deleteCategorie');

    Route::get('getCibleById/{id}', 'CibleController@getCibleById');
    Route::post('addcible', 'CibleController@addcible');
    Route::put('updatecible/{id}', 'CibleController@updatecible');
    Route::get('getcible', 'CibleController@getcible');
    Route::delete('deletecible/{id}', 'CibleController@deletecible');


    Route::get('getconvention', 'ConventionController@getconvention');
    Route::post('addconvention/{id_cat}/{id_cib}', 'ConventionController@addconvention');
    Route::get('getconvByCate/{id_cat}', 'ConventionController@getconvByCate');



    Route::get('getsuggestion', 'SuggestionController@getsuggestion');
    Route::post('addsuggestion/{id_user}', 'SuggestionController@addsuggestion');
    Route::get('getsuggestionById/{id}', 'SuggestionController@getsuggestionById');
    Route::put('updasuggestion/{id}', 'SuggestionController@updasuggestion');



    Route::post('addreponce/{id_user}/{sondage_id}', 'ReponseController@addreponce');
    Route::get('getresult', 'ReponseController@getresult');
    Route::get('getreponcesById/{id}', 'ReponseController@getreponcesById');
    Route::delete('deletereponce/{id}', 'ReponseController@deletereponce');


    Route::post('addsondages/{id_user}', 'SondageController@addsondages');
    Route::get('getsondages', 'SondageController@getsondages');
    Route::put('updasondages/{id}', 'SondageController@updasondages');

    Route::post('addpost/{id_user}', 'PostController@addpost');
    Route::get('getpost', 'PostController@getpost');
    Route::put('updapost/{id}', 'PostController@updapost');
    Route::delete('deletepost/{id}', 'PostController@deletepost');

    Route::post('addcommentaire/{id_user}/{post_id}','CommentaireController@addcommentaire');
    Route::get('getcommentaireById/{id}', 'CommentaireController@getcommentaireById');
    Route::get('getcommentaire', 'CommentaireController@getcommentaire');
    Route::put('updacommentaire/{id}', 'CommentaireController@updacommentaire');
    Route::delete('deletecommentaire/{id}', 'CommentaireController@deletecommentaire');




});
