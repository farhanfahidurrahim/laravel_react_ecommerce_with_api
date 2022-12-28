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

    Route::group(['prefix'=>'admin/subcategory'], function(){
        Route::get('/','SubcategoriesController@index')->name('subcategory.index');
        Route::post('/store','SubcategoriesController@store')->name('subcategory.store');
    });

    //Brand Route...
    Route::group(['prefix'=>'admin/brand'], function(){
        Route::get('/','BrandController@index')->name('brand.index');
        Route::post('/store','BrandController@store')->name('brand.store');
    });

    //Brand Route...
    Route::group(['prefix'=>'admin/product'], function(){
        Route::get('/','ProductController@index')->name('product.index');
        Route::get('/create','ProductController@create')->name('product.create');
        Route::post('/store','ProductController@store')->name('product.store');
    });
});



