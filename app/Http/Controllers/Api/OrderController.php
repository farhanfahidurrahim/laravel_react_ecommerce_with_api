<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Auth;

class OrderController extends Controller
{
    public function myCart()
    {
        $userId=Auth::id();
        $products=DB::table('carts')->where('userid',$userId)->get();

        $total=$products->sum('subtotal');
        
        return response()->json([
            'products'=>$products,
            'total'=>$total,
        ]);
    }
}
