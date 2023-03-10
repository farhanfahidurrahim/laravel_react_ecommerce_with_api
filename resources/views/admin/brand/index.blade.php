@extends('layouts.app_admin')
@section('admin_content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
	    <div class="row mb-2">
	      <div class="col-sm-6">
	        <h1 class="m-0">Brand</h1>
	      </div><!-- /.col -->
	      <div class="col-sm-6">
	        <ol class="breadcrumb float-sm-right">
	          <li class="breadcrumb-item"><a href="#">Home</a></li>
	          <li class="breadcrumb-item active">Brand</li>
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
		                <h3 class="card-title">Brand DataTable with default features</h3>
		                <button class="btn btn-danger btn-sm" style="float:right;" data-toggle="modal" data-target="#myModal">+ Add New</button>
		              </div>
		              <!-- /.card-header -->
		              <div class="card-body">
		                <table id="example1" class="table table-bordered table-striped">
		                	<thead>
			                	<tr>
				                    <th>Index</th>
				                    <th>Catgeory Name</th>
				                    <th>Action</th>
			                	</tr>
		                	</thead>
		                    <tbody>
		                    	@foreach($data as $key=> $row)
			                    <tr>
				                    <td>{{ ++$key }}</td>
				                    <td>{{ $row->brand_name }}</td>
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


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Brand</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        <form method="POST" action="{{ route('brand.store') }}">
        	@csrf
			<div class="form-group">
				<label for="exampleInputEmail1">New Brand Name</label>
				<input type="text" name="brand_name" class="form-control @error('brand_name') is-invalid @enderror" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Brand" required>
				@error('brand_name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

@endsection
