<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{ asset('public/js/app.js') }}" defer></script> --}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Google Font: Source Sans Pro -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/fontawesome-free/css/all.min.css">
	<!-- Ionicons -->
	<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
	<!-- Tempusdominus Bootstrap 4 -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
	<!-- iCheck -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
	<!-- JQVMap -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/jqvmap/jqvmap.min.css">
	<!-- Theme style -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/dist/css/adminlte.min.css">
	<!-- overlayScrollbars -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
	<!-- Daterange picker -->
	<link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/daterangepicker/daterangepicker.css">
	<!-- summernote -->
    <link rel="stylesheet" href="{{ asset('public/assets') }}/plugins/summernote/summernote-bs4.min.css">

    <!-- Styles -->
    {{-- <link href="{{ asset('public/css/app.css') }}" rel="stylesheet"> --}}
</head>
<body>
    <div id="app">
        {{-- <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <ul class="navbar-nav ms-auto"> --}}
                        <!-- Authentication Links -->
                        @guest
                            {{-- @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif --}}
                        @else
                            {{-- <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div> 
                            </li> --}}

                            {{-- <div class="hold-transition sidebar-mini layout-fixed"> --}}
							<div class="wrapper">
								<!-- Navbar -->
							  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
							    <!-- Left navbar links -->
							    <ul class="navbar-nav">
							      <li class="nav-item">
							        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
							      </li>
							      <li class="nav-item d-none d-sm-inline-block">
							        <a href="index3.html" class="nav-link">Home</a>
							      </li>
							      <li class="nav-item d-none d-sm-inline-block">
							        <a href="#" class="nav-link">Contact</a>
							      </li>
							    </ul>

							    <!-- Right navbar links -->
							    <ul class="navbar-nav ml-auto">
							      <!-- Navbar Search -->
							      <li class="nav-item">
							        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
							          <i class="fas fa-search"></i>
							        </a>
							        <div class="navbar-search-block">
							          <form class="form-inline">
							            <div class="input-group input-group-sm">
							              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
							              <div class="input-group-append">
							                <button class="btn btn-navbar" type="submit">
							                  <i class="fas fa-search"></i>
							                </button>
							                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
							                  <i class="fas fa-times"></i>
							                </button>
							              </div>
							            </div>
							          </form>
							        </div>
							      </li>

							      <!-- Messages Dropdown Menu -->
							      <li class="nav-item dropdown">
							        <a class="nav-link" data-toggle="dropdown" href="#">
							          <i class="far fa-comments"></i>
							          <span class="badge badge-danger navbar-badge">3</span>
							        </a>
							        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
							          <a href="#" class="dropdown-item">
							            <!-- Message Start -->
							            <div class="media">
							              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
							              <div class="media-body">
							                <h3 class="dropdown-item-title">
							                  Brad Diesel
							                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
							                </h3>
							                <p class="text-sm">Call me whenever you can...</p>
							                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
							              </div>
							            </div>
							            <!-- Message End -->
							          </a>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item">
							            <!-- Message Start -->
							            <div class="media">
							              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
							              <div class="media-body">
							                <h3 class="dropdown-item-title">
							                  John Pierce
							                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
							                </h3>
							                <p class="text-sm">I got your message bro</p>
							                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
							              </div>
							            </div>
							            <!-- Message End -->
							          </a>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item">
							            <!-- Message Start -->
							            <div class="media">
							              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
							              <div class="media-body">
							                <h3 class="dropdown-item-title">
							                  Nora Silvester
							                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
							                </h3>
							                <p class="text-sm">The subject goes here</p>
							                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
							              </div>
							            </div>
							            <!-- Message End -->
							          </a>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
							        </div>
							      </li>
							      <!-- Notifications Dropdown Menu -->
							      <li class="nav-item dropdown">
							        <a class="nav-link" data-toggle="dropdown" href="#">
							          <i class="far fa-bell"></i>
							          <span class="badge badge-warning navbar-badge">15</span>
							        </a>
							        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
							          <span class="dropdown-item dropdown-header">15 Notifications</span>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item">
							            <i class="fas fa-envelope mr-2"></i> 4 new messages
							            <span class="float-right text-muted text-sm">3 mins</span>
							          </a>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item">
							            <i class="fas fa-users mr-2"></i> 8 friend requests
							            <span class="float-right text-muted text-sm">12 hours</span>
							          </a>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item">
							            <i class="fas fa-file mr-2"></i> 3 new reports
							            <span class="float-right text-muted text-sm">2 days</span>
							          </a>
							          <div class="dropdown-divider"></div>
							          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
							        </div>
							      </li>
							      <li class="nav-item">
							        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
							          <i class="fas fa-expand-arrows-alt"></i>
							        </a>
							      </li>
							      <li class="nav-item">
							        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
							          <i class="fas fa-th-large"></i>
							        </a>
							      </li>
							    </ul>
							  </nav>
							  <!-- /.navbar -->

							  <!-- Main Sidebar Container -->
							  <aside class="main-sidebar sidebar-dark-primary elevation-4">
							    <!-- Brand Logo -->
							    <a href="index3.html" class="brand-link">
							      <img src="{{ asset('public/assets') }}/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
							      <span class="brand-text font-weight-light">Laravel & React</span>
							    </a>

							    <!-- Sidebar -->
							    <div class="sidebar">
							      <!-- Sidebar user panel (optional) -->
							      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
							        <div class="image">
							          <img src="{{ asset('public/assets') }}/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
							        </div>
							        <div class="info">
							          <a href="#" class="d-block">{{ Auth::user()->name }}</a>
							        </div>
							      </div>

							      <!-- Sidebar Menu -->
							      <nav class="mt-2">
							        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							          <!-- Add icons to the links using the .nav-icon class
							               with font-awesome or any other icon font library -->
							          <li class="nav-item menu-open">
							            <a href="{{ route('admin.home') }}" class="nav-link active">
							              <i class="nav-icon fas fa-tachometer-alt"></i>
							              <p>
							                Dashboard
							              </p>
							            </a>
							          </li>
							          <li class="nav-item">
							            <a href="pages/widgets.html" class="nav-link">
							              <i class="nav-icon fas fa-th"></i>
							              <p>
							                Widgets
							                <span class="right badge badge-danger">New</span>
							              </p>
							            </a>
							          </li>
							          
							          <li class="nav-item">
							            <a href="#" class="nav-link">
							              <i class="nav-icon fas fa-table"></i>
							              <p>
							                Tables
							                <i class="fas fa-angle-left right"></i>
							              </p>
							            </a>
							            <ul class="nav nav-treeview">
							              <li class="nav-item">
							                <a href="pages/tables/simple.html" class="nav-link">
							                  <i class="far fa-circle nav-icon"></i>
							                  <p>Simple Tables</p>
							                </a>
							              </li>
							              <li class="nav-item">
							                <a href="pages/tables/data.html" class="nav-link">
							                  <i class="far fa-circle nav-icon"></i>
							                  <p>DataTables</p>
							                </a>
							              </li>
							              <li class="nav-item">
							                <a href="pages/tables/jsgrid.html" class="nav-link">
							                  <i class="far fa-circle nav-icon"></i>
							                  <p>jsGrid</p>
							                </a>
							              </li>
							            </ul>
							          </li>
							          
							          <li class="nav-header">LABELS</li>
							          <li class="nav-item">
							            <a href="#" class="nav-link">
							              <i class="nav-icon far fa-circle text-danger"></i>
							              <p class="text">Logout</p>
							            </a>
							          </li>
							          <li class="nav-item">
							            <a href="#" class="nav-link">
							              <i class="nav-icon far fa-circle text-warning"></i>
							              <p>Warning</p>
							            </a>
							          </li>
							          <li class="nav-item">
							            <a href="#" class="nav-link">
							              <i class="nav-icon far fa-circle text-info"></i>
							              <p>Informational</p>
							            </a>
							          </li>
							        </ul>
							      </nav>
							      <!-- /.sidebar-menu -->
							    </div>
							    <!-- /.sidebar -->
							  </aside>
							</div>
							{{-- </div> --}}
                        @endguest
{{--                     </ul>
                </div>
            </div>
        </nav> --}}

        <main class="py-4">
            @yield('admin_content')
        </main>
    </div>

    <!-- jQuery -->
	<script src="{{ asset('public/assets') }}/plugins/jquery/jquery.min.js"></script>
	<!-- jQuery UI 1.11.4 -->
	<script src="{{ asset('public/assets') }}/plugins/jquery-ui/jquery-ui.min.js"></script>
	<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
	<script>
	  $.widget.bridge('uibutton', $.ui.button)
	</script>
	<!-- Bootstrap 4 -->
	<script src="{{ asset('public/assets') }}/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- ChartJS -->
	<script src="{{ asset('public/assets') }}/plugins/chart.js/Chart.min.js"></script>
	<!-- Sparkline -->
	<script src="{{ asset('public/assets') }}/plugins/sparklines/sparkline.js"></script>
	<!-- JQVMap -->
	<script src="{{ asset('public/assets') }}/plugins/jqvmap/jquery.vmap.min.js"></script>
	<script src="{{ asset('public/assets') }}/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
	<!-- jQuery Knob Chart -->
	<script src="{{ asset('public/assets') }}/plugins/jquery-knob/jquery.knob.min.js"></script>
	<!-- daterangepicker -->
	<script src="{{ asset('public/assets') }}/plugins/moment/moment.min.js"></script>
	<script src="{{ asset('public/assets') }}/plugins/daterangepicker/daterangepicker.js"></script>
	<!-- Tempusdominus Bootstrap 4 -->
	<script src="{{ asset('public/assets') }}/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
	<!-- Summernote -->
	<script src="{{ asset('public/assets') }}/plugins/summernote/summernote-bs4.min.js"></script>
	<!-- overlayScrollbars -->
	<script src="{{ asset('public/assets') }}/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
	<!-- AdminLTE App -->
	<script src="{{ asset('public/assets') }}/dist/js/adminlte.js"></script>
	<!-- AdminLTE for demo purposes -->
	<script src="{{ asset('public/assets') }}/dist/js/demo.js"></script>
	<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
	<script src="{{ asset('public/assets') }}/dist/js/pages/dashboard.js"></script>

</body>
</html>
