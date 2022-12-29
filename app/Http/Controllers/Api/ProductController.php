<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use DB;
use Auth;

class ProductController extends Controller
{
    public function hotdeal()
    {
        $data=Product::where('hot_deal',1)->orderBy('id','DESC')->limit(3)->get();
        return response()->json($data);
    }

    public function buyoneget()
    {
        $data=Product::where('buy_one_get_one','1')->orderBy('id','DESC')->limit(3)->get();
        return response()->json($data);
    }

    public function recentproduct()
    {
        $data=Product::orderBy('id','DESC')->limit(6)->get();
        return response()->json($data);
    }

    public function singleproduct($id)
    {
        $data=Product::findOrFail($id);

        $color=explode(',', $data->color);
        $size=explode(',',$data->size);

        return response()->json([
            'product'=>$data,
            'color'=>$color,
            'size'=>$size,
        ]);
    }

    public function addwishlist($id)
    {   
        //__using_query_builder__
        $userid=Auth::id();
        $check=DB::table('wishlists')->where('user_id',$userid)->where('product_id',$id)->first();

        if ($check) {
            return response([
                'message'=>'Product Already Exist On Your Cart'
            ],200);

        }else{
            $data=array();
            $data['user_id']=$userid;
            $data['product_id']=$id;
            DB::table('wishlists')->insert($data);

            return response([
                'message'=>'Product Added on wishlist'
            ]);
        }

        
    }
}
