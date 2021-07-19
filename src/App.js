import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import  AlertTemplate from 'react-alert-template-basic';
import { createBrowserHistory } from "history";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "assets/scss/material-kit-react.scss?v=1.9.0";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

// pages for konnect
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

import LoginPage from "authentic/accounts/LoginPage/LoginPage.js";
import RegisterPage from "authentic/accounts/RegisterPage/RegisterPage.js";
import PrivateRoute from "authentic/protect//PrivateRoute.js";

import AboutPage from "views/AboutPage/AboutPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import PrivacyPage from "views/PrivacyPage/PrivacyPage.js";

//views from template
import UserProfile from "authentic/auth-views/Profile/UserProfile.js";
import BlogPosts from "authentic/auth-views/BlogPosts.js";
import AddNewPost from "authentic/auth-views/AddNewPost.js";
import Errors from "authentic/auth-views/Errors.js";
import Tables from "authentic/auth-views/Tables.js";

//konnect stuff
import Profiles from "authentic/auth-views/Profile/Profiles.js";
import ProfileTypes from "authentic/auth-views/Profile/ProfileTypes.js";
import ServiceProviderCreateProfile from "authentic/auth-views/Profile/ServiceProviderCreateProfile.js";
import ServiceProviderProfiles from "authentic/auth-views/Profile/ServiceProviderProfiles.js";
import ServiceProviderEditProfile from "authentic/auth-views/Profile/ServiceProviderEditProfile.js";

import Alerts from 'authentic/layouts/Alerts';

import { loadUser } from 'actions/auth';
import store from './store';

const API_KEY = process.env.KEY


// Alert options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

var hist = createBrowserHistory(); 

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  
  render(){
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router  history={hist}>
              <Fragment>
                      <Alerts />
                      <Switch>
                      
                        <PrivateRoute  path="/home" component={BlogPosts} />
                        
                        <PrivateRoute  path="/profile" component={UserProfile} />
                        <PrivateRoute  path="/new-post" component={AddNewPost} />
                        <PrivateRoute  path="/error" component={Errors} />
                        <PrivateRoute  path="/tables" component={Tables} />
                        <PrivateRoute  path="/bussiness profiles" component={Profiles} />
                        <PrivateRoute  path="/profile-types" component={ProfileTypes} />
                        <PrivateRoute  path="/service-provider-profile" component={ServiceProviderCreateProfile} />
                        <PrivateRoute  path="/service-motor-profiles" component={ServiceProviderProfiles} />
                        <PrivateRoute  path="/edit-view-service-motor-profile/:id" component={ServiceProviderEditProfile} />

                        <Route path="/landing-page" component={LandingPage} />
                        <Route path="/profile-page" component={ProfilePage} />
                        <Route path="/login-page" component={LoginPage} />
                        <Route path="/register-page" component={RegisterPage} />

                        <Route path="/about-page" component={AboutPage} />
                        <Route path="/contact-page" component={ContactPage} />
                        <Route path="/privacy-page" component={PrivacyPage} />
                        <Route exact path="/" component={Components} />
                       
                      </Switch>
              </Fragment>
            </Router>
        </AlertProvider>
      </Provider>
   
    );
  }
}

export default App;
