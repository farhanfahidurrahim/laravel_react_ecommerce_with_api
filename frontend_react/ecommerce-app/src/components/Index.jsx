import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div>

        {/* Slider Area */}
        <section className="hero-slider">
          {/* Single Slider */}
          <div className="single-slider">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-9 offset-lg-3 col-12">
                  <div className="text-inner">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <div className="hero-text">
                          <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                          <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                          <div className="button">
                            <a href="#" className="btn">Shop Now!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Single Slider */}
        </section>
        {/*/ End Slider Area */}
        {/* Start Small Banner  */}
        <section className="small-banner section">
          <div className="container-fluid">
            <div className="row">
              {/* Single Banner  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-banner">
                  <img src="assets/images/mini-banner1.jpg" alt="#" />
                  <div className="content">
                    <p>Man's Collectons</p>
                    <h3>Summer travel <br /> collection</h3>
                    <a href="#">Discover Now</a>
                  </div>
                </div>
              </div>
              {/* /End Single Banner  */}
              {/* Single Banner  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-banner">
                  <img src="assets/images/mini-banner2.jpg" alt="#" />
                  <div className="content">
                    <p>Bag Collectons</p>
                    <h3>Awesome Bag <br /> 2020</h3>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* /End Single Banner  */}
              {/* Single Banner  */}
              <div className="col-lg-4 col-12">
                <div className="single-banner tab-height">
                  <img src="assets/images/mini-banner3.jpg" alt="#" />
                  <div className="content">
                    <p>Flash Sale</p>
                    <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                    <a href="#">Discover Now</a>
                  </div>
                </div>
              </div>
              {/* /End Single Banner  */}
            </div>
          </div>
        </section>
        {/* End Small Banner */}
        {/* Start Product Area */}
        <div className="product-area section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Trending Item</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-info">
                  <div className="nav-main">
                    {/* Tab Nav */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                    </ul>
                    {/*/ End Tab Nav */}
                  </div>
                  <div className="tab-content" id="myTabContent">
                    {/* Start Single Tab */}
                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p2.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p2.jpg" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p4.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p4.jpg" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p6.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p6.jpg" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p8.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p8.jpg" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p10.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p10.jpg" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p12.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p12.jpg" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p14.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p14.jpg" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="assets/images/p16.jpg" alt="#" />
                                  <img className="hover-img" src="assets/images/p16.jpg" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="women" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="kids" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="essential" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="prices" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Area */}
        {/* Start Midium Banner  */}
        <section className="midium-banner">
          <div className="container">
            <div className="row">
              {/* Single Banner  */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single-banner">
                  <img src="assets/images/mini-banner1.jpg" alt="#" />
                  <div className="content">
                    <p>Man's Collectons</p>
                    <h3>Man's items <br />Up to<span> 50%</span></h3>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* /End Single Banner  */}
              {/* Single Banner  */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single-banner">
                  <img src="assets/images/mini-banner2.jpg" alt="#" />
                  <div className="content">
                    <p>shoes women</p>
                    <h3>mid season <br /> up to <span>70%</span></h3>
                    <a href="#" className="btn">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* /End Single Banner  */}
            </div>
          </div>
        </section>
        {/* End Midium Banner */}
        {/* Start Most Popular */}
        <div className="product-area most-popular section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Hot Item</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="owl-carousel popular-slider">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                        <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                        <span className="out-of-stock">Hot</span>
                      </a>
                      <div className="button-head">
                        <div className="product-action">
                          <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                          <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                          <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                        </div>
                        <div className="product-action-2">
                          <a title="Add to cart" href="#">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                      <div className="product-price">
                        <span className="old">$60.00</span>
                        <span>$50.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                        <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      </a>
                      <div className="button-head">
                        <div className="product-action">
                          <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                          <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                          <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                        </div>
                        <div className="product-action-2">
                          <a title="Add to cart" href="#">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3><a href="product-details.html">Women Hot Collection</a></h3>
                      <div className="product-price">
                        <span>$50.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                        <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                        <span className="new">New</span>
                      </a>
                      <div className="button-head">
                        <div className="product-action">
                          <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                          <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                          <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                        </div>
                        <div className="product-action-2">
                          <a title="Add to cart" href="#">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                      <div className="product-price">
                        <span>$50.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                        <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      </a>
                      <div className="button-head">
                        <div className="product-action">
                          <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                          <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                          <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                        </div>
                        <div className="product-action-2">
                          <a title="Add to cart" href="#">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                      <div className="product-price">
                        <span>$50.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Most Popular Area */}
        {/* Start Shop Home List  */}
        <section className="shop-home-list section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="shop-section-title">
                      <h1>On sale</h1>
                    </div>
                  </div>
                </div>
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h4 className="title"><a href="#">Licity jelly leg flat Sandals</a></h4>
                        <p className="price with-discount">$59</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$44</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$89</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="shop-section-title">
                      <h1>Best Seller</h1>
                    </div>
                  </div>
                </div>
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$65</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$33</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$77</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="shop-section-title">
                      <h1>Top viewed</h1>
                    </div>
                  </div>
                </div>
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$22</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$35</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                        <img src="https://via.placeholder.com/115x140" alt="#" />
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                        <p className="price with-discount">$99</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
              </div>
            </div>
          </div>
        </section>
        {/* End Shop Home List  */}
        {/* Start Cowndown Area */}
        <section className="cown-down">
          <div className="section-inner ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-12 padding-right">
                  <div className="image">
                    <img src="https://via.placeholder.com/750x590" alt="#" />
                  </div>	
                </div>	
                <div className="col-lg-6 col-12 padding-left">
                  <div className="content">
                    <div className="heading-block">
                      <p className="small-title">Deal of day</p>
                      <h3 className="title">Beatutyful dress for women</h3>
                      <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
                      <h1 className="price">$1200 <s>$1890</s></h1>
                      <div className="coming-time">
                        <div className="clearfix" data-countdown="2021/02/30" />
                      </div>
                    </div>
                  </div>	
                </div>	
              </div>
            </div>
          </div>
        </section>
        {/* /End Cowndown Area */}
        {/* Start Shop Blog  */}
        <section className="shop-blog section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>From Our Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Blog  */}
                <div className="shop-single-blog">
                  <img src="assets/images/blog1.jpg" alt="#" />
                  <div className="content">
                    <p className="date">22 July , 2020. Monday</p>
                    <a href="#" className="title">Sed adipiscing ornare.</a>
                    <a href="#" className="more-btn">Continue Reading</a>
                  </div>
                </div>
                {/* End Single Blog  */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Blog  */}
                <div className="shop-single-blog">
                  <img src="assets/images/blog2.jpg" alt="#" />
                  <div className="content">
                    <p className="date">22 July, 2020. Monday</p>
                    <a href="#" className="title">Man’s Fashion Winter Sale</a>
                    <a href="#" className="more-btn">Continue Reading</a>
                  </div>
                </div>
                {/* End Single Blog  */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Blog  */}
                <div className="shop-single-blog">
                  <img src="assets/images/blog3.jpg" alt="#" />
                  <div className="content">
                    <p className="date">22 July, 2020. Monday</p>
                    <a href="#" className="title">Women Fashion Festive</a>
                    <a href="#" className="more-btn">Continue Reading</a>
                  </div>
                </div>
                {/* End Single Blog  */}
              </div>
            </div>
          </div>
        </section>
        {/* End Shop Blog  */}
        {/* Start Shop Services Area */}
        <section className="shop-services section home">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-rocket" />
                  <h4>Free shiping</h4>
                  <p>Orders over $100</p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-reload" />
                  <h4>Free Return</h4>
                  <p>Within 30 days returns</p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-lock" />
                  <h4>Sucure Payment</h4>
                  <p>100% secure payment</p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-tag" />
                  <h4>Best Peice</h4>
                  <p>Guaranteed price</p>
                </div>
                {/* End Single Service */}
              </div>
            </div>
          </div>
        </section>
        {/* End Shop Services Area */}
        {/* Start Shop Newsletter  */}
        <section className="shop-newsletter section">
          <div className="container">
            <div className="inner-top">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-12">
                  {/* Start Newsletter Inner */}
                  <div className="inner">
                    <h4>Newsletter</h4>
                    <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                      <input name="EMAIL" placeholder="Your email address" required type="email" />
                      <button className="btn">Subscribe</button>
                    </form>
                  </div>
                  {/* End Newsletter Inner */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Shop Newsletter */}

      </div>
    )
  }
}

export default Index