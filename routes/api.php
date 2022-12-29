<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
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

//__Category
Route::get('/categories','App\Http\Controllers\Api\CategoryController@categories');
//__Subcategory
Route::get('/subcategories','App\Http\Controllers\Api\SubcategoryController@subcategories');
//__Product
Route::get('/hotdeal','App\Http\Controllers\Api\ProductController@hotdeal');
Route::get('/buyoneget','App\Http\Controllers\Api\ProductController@buyoneget');
Route::get('/recentproduct','App\Http\Controllers\Api\ProductController@recentproduct');
//__Single Product
Route::get('/singleproduct/{id}','App\Http\Controllers\Api\ProductController@singleproduct');
//__Wishlist Product
Route::get('/addwishlist/{id}','App\Http\Controllers\Api\ProductController@addwishlist')->middleware('auth:api');
//__Cart route
Route::post('/addcart/{id}','App\Http\Controllers\Api\CartController@addtocart')->middleware('auth:api');
Route::get('/removeitem/{id}','App\Http\Controllers\Api\CartController@itemremove')->middleware('auth:api');
Route::get('/cartflash','App\Http\Controllers\Api\CartController@cartflash')->middleware('auth:api');
Route::get('/cartproducts','App\Http\Controllers\Api\CartController@cartproducts')->middleware('auth:api');
//Order & Checkout route
Route::get('/mycarts','App\Http\Controllers\Api\OrderController@myCart')->middleware('auth:api');



