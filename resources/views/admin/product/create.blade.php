@extends('layouts.app_admin')
@section('admin_content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
	    <div class="row mb-2">
	      <div class="col-sm-6">
	        <h1 class="m-0">Add Products</h1>
	      </div><!-- /.col -->
	      <div class="col-sm-6">
	        <ol class="breadcrumb float-sm-right">
	          <li class="breadcrumb-item"><a href="#">Home</a></li>
	          <li class="breadcrumb-item active">Add Product</li>
	        </ol>
	      </div><!-- /.col -->
	    </div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      	<div class="container-fluid">
	        <form method="POST" action="{{ route('product.store') }}" enctype="multipart/form-data">
	        	@csrf
		        <div class="row">
					<div class="col-12">
			            <div class="card">
			              <div class="card-header">
			                <h3 class="card-title">New Product Add with Details</h3>
			                <a href="{{ route('product.index') }}" class="btn btn-danger btn-sm" style="float:right;">+ All Product</a>
			              </div>
			              <!-- /.card-header -->

		                <div class="card-body">
			                <div class="row">
			                    <div class="form-group col-lg-6">
			                       <label for="exampleInputEmail1">Product Name <span class="text-danger">*</span> </label>
			                       <input type="text" class="form-control" name="name" value="{{ old('name') }}"  required="">
			                    </div>
			                    {{-- <div class="form-group col-lg-6">
			                       <label for="exampleInputPassword1">Product Code <span class="text-danger">*</span> </label>
			                       <input type="text" class="form-control" value="{{ old('code') }}" name="code" required="">
				                </div> --}}
			                </div>
		                  	<div class="row">
			                    <div class="form-group col-lg-6">
			                       <label for="exampleInputEmail1">Category/Subcategory <span class="text-danger">*</span> </label>
			                       <select class="form-control" name="subcategory_id" id="subcategory_id">
			                            <option disabled="" selected="">==Choose Category==</option>
			                            @foreach($cat as $row)
			                            @php 
			                              $subcategory=DB::table('subcategories')->where('category_id',$row->id)->get();
			                            @endphp
			                            <option style="color:blue;" disabled="">{{ $row->category_name }}</option>
			                              @foreach($subcategory as $row)
			                                <option value="{{ $row->id }}"> -- {{ $row->subcategory_name }}</option>
			                              @endforeach
			                        	@endforeach 
			                      	</select>
			                    </div>
		                    	{{-- <div class="form-group col-lg-6">
		                      		<label for="exampleInputPassword1">Child category<span class="text-danger">*</span> </label>
		                      		<select class="form-control" name="childcategory_id" id="childcategory_id">
		                         
		                      		</select>
		                    	</div> --}}
		                  	</div>
		                  	<div class="row">
		                    	<div class="form-group col-lg-6">
		                      		<label for="exampleInputEmail1">Brand <span class="text-danger">*</span> </label>
		                      		<select class="form-control" name="brand_id">
		                      			<option selected disabled>Select Brand</option>
		                        		@foreach($brand as $row)
		                          		<option value="{{ $row->id }}">{{ $row->brand_name }}</option>
		                        		@endforeach 
		                      		</select>
		                    	</div>
		                    	<div class="form-group col-lg-6">
		                      		<label for="exampleInputEmail1">Product Price <span class="text-danger">*</span> </label>
		                      		<input type="text" class=form-control name="price" value="{{ old('price') }}" required="">
		                    	</div>
		                  	</div>
		                  	<div class="row">
		                    	<div class="input-group mb-3">
									<div class="custom-file">
									    <input type="file" name="image" class="custom-file-input" id="inputGroupFile02" required>
									    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
									</div>
									<div class="input-group-append">
									    <span class="input-group-text" id="">Upload</span>
									</div>
								</div>
		                  	</div>
							<div class="row">
								{{-- <div class="form-group col-lg-4">
							  		<label for="exampleInput">Discount Price  </label>
							  		<input type="text" class="form-control" value="{{ old('discount_price') }}" name="discount_price">
								</div> --}}
								<div class="form-group col-lg-4">
							  		<label for="exampleInput">Product Size<span class="text-danger">*</span> </label>
							  		<input type="text" name="size" value="{{ old('size') }}" class="form-control">
								</div>
								<div class="form-group col-lg-4">
							  		<label for="exampleInput">Product Color</label>
							  		<input type="text" name="color" value="{{ old('color') }}" class="form-control">
								</div>
							</div>
							<div class="row">
			                    <div class="form-group col-lg-12">
			                      	<label for="exampleInputPassword1">Product Details<span class="text-danger">*</span></label>
			                     	<textarea class="form-control textarea" name="details" value="{{ old('details') }}" required></textarea>
			                    </div>
		                  	</div>

		                  	<hr>

		                  	<h4 class="text-center">Extra Option</h4>

		                  	<div class="row">
			                    <div class="form-check col-md-4">
			                    	<input type="checkbox" name="stockout" class="form-check-label" value="1" checked>
			                    	<label for="exampleInputEmail1">Stock Available</label>
			                    </div>
		                    
			                    <div class="form-check col-md-4">
			                    	<input type="checkbox" class="form-check-label" name="hot_deal" value="1">
			                    	<label for="exampleInputEmail1">Hot Deal</label>
			                    </div>
			                    <div class="form-check col-md-4">
			                    	<input type="checkbox" class="form-check-label" name="buy_one_get_one" value="1">
			                    	<label for="exampleInputPassword1">Buy One Get One</label>
			                    </div>
		                  	</div>
		                </div>
			            </div>
		          </div>
		          <button class="btn btn-info ml-2" type="submit">Submit</button>
		        </div>
	    	</form>
	        <!-- /.row -->
        </div>
    </section>    
</div>


@endsection
