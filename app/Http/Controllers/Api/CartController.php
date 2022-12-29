<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Auth;

class CartController extends Controller
{
    public function addtocart(Request $request,$id)
    {
        $userId=Auth::id();
        $check=DB::table('carts')->where('userid',$userId)->where('productid',$id)->first();
        $product=DB::table('products')->where('id',$id)->first();

        if ($check) {
            
            $checkId=$check->id;            
            $data=array();
            $data['qty']=$request->qty;
            $data['subtotal']=$request->qty*$check->price;
            DB::table('carts')->where('id',$checkId)->update($data);
            return response()->json("Cart Update");

        }else{
            
            $data=array();
            $data['productid']=$id;
            $data['userid']=$userId;
            $data['productname']=$product->name;
            $data['price']=$product->price;
            $data['qty']=$request->qty;
            $data['size']=$request->size;
            $data['color']=$request->color;
            $data['subtotal']=$product->price*$request->qty;

            DB::table('carts')->insert($data);
            return response()->json("Product Add To Cart");
        }
    }

    public function itemremove($id)
    {
        DB::table('carts')->where('id',$id)->delete();
        return response()->json("Item Remove");
    }

    public function cartflash()
    {
        $userId=Auth::id();
        DB::table('carts')->where('userid',$userId)->delete();
        return response()->json("Cart Flash");
    }

    public function cartproducts()
    {
        $userId=Auth::id();
        $allcartproduct=DB::table('carts')->where('userid',$userId)->get();
        return response()->json($allcartproduct);
    }
}
