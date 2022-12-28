<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $data=Category::all();
        return view('admin.category.index',compact('data'));
    }

    public function store(Request $request)
    {
        $data=new Category;
        $data->category_name=$request->category_name;
        $data->save();

        return redirect()->back();
    }
}
