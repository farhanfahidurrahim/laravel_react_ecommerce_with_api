import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import axios from 'axios';

 class Login extends Component {

  state={
    email:"",
    password:"",
    message:"",
  }

  //Submit button click then..
  formSubmit=(e)=>{
    e.preventDefault();
    
    const data={
      email:this.state.email,
      password:this.state.password,
    }

    axios.post('/login',data)
    .then((response)=> {
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {

    //After login
    if(this.state.loggedIn){
      return <Navigate  to={'/MyAccount'}/>
    }

    return (
        <div>

          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bread-inner">
                    <ul className="bread-list">
                      <li><a href="index1.html">Home<i className="ti-arrow-right" /></a></li>
                      <li className="active"><a href="blog-single.html">Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Breadcrumbs */}
          {/* Start Contact */}
          <section id="contact-us" className="contact-us section">
            <div className="container">
              <div className="contact-head">
                <div className="row">
                  <div className="col-lg-8 col-12">
                    <div className="form-main">
                      <div className="title">
                        <h4>Get in touch</h4>
                        <h3>Login Your Account</h3>
                      </div>
                      <form onSubmit={this.formSubmit}>
                        <div className="row">
                          <div className="col-lg-6 col-12">
                            <div className="form-group">
                              <label>Your Email<span>*</span></label>
                              <input type="text" name="email" placeholder="Enter Email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                            </div>
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="form-group">
                              <label>Your Password<span>*</span></label>
                              <input type="password" name="password" placeholder="Enter Password" required onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group button">
                              <button type="submit" className="btn">Login</button>
                            </div>
                          </div>
                          <div className="col-lg-6 col-12">
                              I don't have an account <Link to="/register">Register Now!</Link>	
                          </div>
                          <div className="col-lg-6 col-12">
                              Forget my password <Link to="/forgot-password">Forgot Password!</Link>	
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="single-head">
                      <div className="single-info">
                        <i className="fa fa-phone" />
                        <h4 className="title">Call us Now:</h4>
                        <ul>
                          <li>+123 456-789-1120</li>
                        </ul>
                      </div>
                      <div className="single-info">
                        <i className="fa fa-envelope-open" />
                        <h4 className="title">Email:</h4>
                        <ul>
                          <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
                        </ul>
                      </div>
                      <div className="single-info">
                        <i className="fa fa-location-arrow" />
                        <h4 className="title">Our Address:</h4>
                        <ul>
                          <li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ End Contact */}

        </div>
    )
  }
}

export default Login