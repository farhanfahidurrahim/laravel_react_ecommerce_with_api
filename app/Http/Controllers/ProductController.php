<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Product;
use Illuminate\Support\Str;
use DB;
use Image;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {   
        $data=Product::all();
        return view('admin.product.index',compact('data'));
    }

    public function create()
    {   
        $cat=Category::all();
        $brand=Brand::all();
        return view('admin.product.create',compact('cat','brand'));
    }

    public function store(Request $request)
    {
        //dd($request->all());

        $subcategory=DB::table('subcategories')->where('id',$request->subcategory_id)->first();

        $data=new Product;
        $data->name=$request->name;
        $data->slug=Str::slug($request->name, '-');
        $data->category_id=$subcategory->category_id;
        $data->subcategory_id=$request->subcategory_id;
        $data->brand_id=$request->brand_id;
        $data->details=$request->details;
        $data->price=$request->price;
        $data->size=$request->size;
        $data->color=$request->color;
        $data->stockout=$request->stockout;
        $data->hot_deal=$request->hot_deal;
        $data->buy_one_get_one=$request->buy_one_get_one;
        //Image Part
        $slug=Str::slug($request->name, '-');
        if ($request->image) {

            $img=$request->image;
            $photoname=$slug.'.'.$img->getClientOriginalExtension();
            Image::make($img)->resize(600,600)->save('public/product/'.$photoname);
            $data->image=$photoname;
        }

        $data->save();
        return redirect()->back()->with('success','Successfully! Product created');
    }
}
