<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['namespace'=>'App\Http\Controllers','middleware'=>'is_admin'], function(){

    Route::get('/admin/home', 'AdminController@adminIndex')->name('admin.home');

    //Category Route...
    Route::group(['prefix'=>'admin/category'], function(){
        Route::get('/','CategoryController@index')->name('category.index');
        Route::post('/store','CategoryController@store')->name('category.store');
    });
});



