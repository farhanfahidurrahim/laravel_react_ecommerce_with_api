import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from '../components/Index'
import Footer from './Footer';
import Layout from './Layout';

class Common extends Component {
  render() {
    return (
        <Router>
            <div className='App'>
                <Layout/>
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
  }
}

export default Common