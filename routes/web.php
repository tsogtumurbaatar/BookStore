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
});

Route::get('/api/category/fetch', 'CategoryController@indexApi');
Route::get('/api/category/fetch/{id}', 'CategoryController@fetchOneApi');
Route::post('/api/category/add', 'CategoryController@addApi');
Route::post('/api/category/remove', 'CategoryController@removeApi');
Route::post('/api/category/save', 'CategoryController@saveApi');

Route::get('/api/book/fetch', 'BookController@indexApi');
Route::get('/api/book/fetch/{id}', 'BookController@fetchOneApi');
Route::post('/api/book/add', 'BookController@addApi');
Route::post('/api/book/remove', 'BookController@removeApi');
Route::post('/api/book/save', 'BookController@saveApi');

