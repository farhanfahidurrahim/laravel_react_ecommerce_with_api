<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;

class SubcategoryController extends Controller
{
    public function subcategories()
    {
        $data=Subcategory::all();
        return response()->json($data);
    }
}
