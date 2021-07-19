import React from 'react';
import {  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from './Spinner.js';

const PrivateRoute = ({ component: Component, path: Path, auth, error,  ...rest }) => (
       <Route 
       {...rest}
       render={ (props) => {
       	if(auth.isLoading){
       		return (
              <Spinner />
            );
       	}else if(auth.token === null || auth.token === undefined ){
       		return <Redirect to="/login-page" />;
       	}else{
       		return <Component {...props} />;
       	}
     }}
   />
	
);

const mapStateToProps = state => ({
	auth: state.auth,
  error: state.errors,
});

export default connect(mapStateToProps)(PrivateRoute);