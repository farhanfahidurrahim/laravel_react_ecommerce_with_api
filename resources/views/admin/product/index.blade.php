@extends('layouts.app_admin')
@section('admin_content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
	    <div class="row mb-2">
	      <div class="col-sm-6">
	        <h1 class="m-0">Products</h1>
	      </div><!-- /.col -->
	      <div class="col-sm-6">
	        <ol class="breadcrumb float-sm-right">
	          <li class="breadcrumb-item"><a href="#">Home</a></li>
	          <li class="breadcrumb-item active">Product</li>
	        </ol>
	      </div><!-- /.col -->
	    </div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      	<div class="container-fluid">
	        <!-- Small boxes (Stat box) -->
	        <div class="row">
				<div class="col-12">
		            <div class="card">
		              <div class="card-header">
		                <h3 class="card-title">All Product DataTable with default features</h3>
		                <a href="{{ route('product.create') }}" class="btn btn-danger btn-sm" style="float:right;">+ Add New Product</a>
		              </div>
		              <!-- /.card-header -->
		              <div class="card-body">
		                <table id="example1" class="table table-bordered table-striped">
		                	<thead>
			                	<tr>
				                    <th>Index</th>
				                    <th>Image</th>
				                    <th>Name</th>
				                    <th>Category</th>
				                    <th>Subcategory</th>
				                    <th>Price</th>
				                    <th>Stock</th>
				                    <th>Action</th>
			                	</tr>
		                	</thead>
		                    <tbody>
		                    	@foreach($data as $key=>$row)
			                    <tr>
				                    <td>{{ ++$key }}</td>
				                    <td><img src="{{ asset('public/product/'.$row->image)  }}" style="height:50px; width: 50px;"></td>
				                    <td>{{ $row->name }}</td>
				                    <td>{{ $row->category->category_name }}</td>
				                    <td>{{ $row->subcategory->subcategory_name }}</td>
				                    <td>{{ $row->price }}</td>
				                    <td>
				                    	@if($row->stockout==1)
				                    	<span class="badge badge-success">Available</span>
				                    	@else
				                    	<span class="badge badge-danger">Stockout</span>
				                    	@endif
				                    </td>
				                    <td>
				                    	<a href=""><i class="fa fa-edit"></i></a>
				                    	<a href=""><i class="fa fa-trash"></i></a>
				                    </td>
			                    </tr>
			                    @endforeach
		                    </tbody>
		                </table>
		              </div>
		              <!-- /.card-body -->
		            </div>
	            <!-- /.card -->
	          </div>
	          <!-- /.col -->
	        </div>
	        <!-- /.row -->
        </div>
    </section>    
</div>


@endsection
