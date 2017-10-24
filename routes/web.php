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
// Route::post('/api/deletebooks', 'BooksController@deletebooksApi');
// Route::post('/api/addbook', 'BooksController@addbookApi');
// Route::post('/api/updatebook', 'BooksController@updatebookApi');
