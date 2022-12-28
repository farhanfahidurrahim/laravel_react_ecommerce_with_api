<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;

class BrandController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {   
        $data=Brand::all();
        return view('admin.brand.index',compact('data'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'brand_name'=>'required|unique:brands',
        ]);

        $data=new Brand;
        $data->brand_name=$request->brand_name;
        $data->save();

        return redirect()->back()->with('success','Successfully! Brand created');
    }
}
