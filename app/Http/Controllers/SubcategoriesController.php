<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subcategory;
use App\Models\Category;

class SubcategoriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {   
        $data=Subcategory::all();
        $cat=Category::all();
        return view('admin.subcategory.index',compact('data','cat'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'subcategory_name'=>'required|unique:subcategories',
        ]);

        $data=new Subcategory;
        $data->subcategory_name=$request->subcategory_name;
        $data->category_id=$request->category_id;
        $data->save();

        return redirect()->back()->with('success','Successfully! Subcategory created');
    }
}
