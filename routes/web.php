<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
	Route::post('details', 'API\UserController@details');
	
	Route::post('/api/lng/add', 'LngController@addApi');
	Route::post('/api/lng/remove', 'LngController@removeApi');
	Route::post('/api/lng/save', 'LngController@saveApi');

	Route::post('/api/category/add', 'CategoryController@addApi');
	Route::post('/api/category/remove', 'CategoryController@removeApi');
	Route::post('/api/category/save', 'CategoryController@saveApi');

	Route::post('/api/book/add', 'BookController@addApi');
	Route::post('/api/book/remove', 'BookController@removeApi');
	Route::post('/api/book/save', 'BookController@saveApi');

	Route::post('/api/review/add', 'ReviewController@addApi');
	Route::post('/api/review/remove', 'ReviewController@removeApi');
	Route::post('/api/review/save', 'ReviewController@saveApi');
});

Route::get('/api/category/fetch', 'CategoryController@indexApi');
Route::get('/api/category/fetch/{id}', 'CategoryController@fetchOneApi');


Route::get('/api/book/fetch', 'BookController@indexApi');
Route::get('/api/book/fetch/{id}', 'BookController@fetchOneApi');

Route::get('/api/lng/fetch', 'LngController@indexApi');
Route::get('/api/lng/fetch/{id}', 'LngController@fetchOneApi');

Route::get('/api/review/fetch/{id}', 'ReviewController@indexApi');
// Route::get('/api/review/fetch/{id}', 'ReviewController@fetchOneApi');

