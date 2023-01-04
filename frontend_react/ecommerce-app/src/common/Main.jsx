import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Index from '../components/Index';
import Footer from './Footer';
import Layout from './Layout';
import Login from '../components/Login';
import MyAccount from '../components/MyAccount';

class Common extends Component {
  render() {
    return (
        <Router>
            <div className='App'>
                <Layout/>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/myaccount" element={<MyAccount/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
  }
}

export default Common