import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, loadUser } from '.../../actions/auth';


import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

export class SubmitLogin extends Component{
 
   static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
    
  };

   handleSubmitLogin = (e) => {
       // console.log(this.props.credentials.name) 
       // console.log(this.props.credentials.pasword) 
       // console.log(this.props) 
       e.preventDefault();
       this.props.login(this.props.credentials.name, this.props.credentials.pasword);
    }
      
   render(){
     if(this.props.isAuthenticated){
      console.log(this.props.isAuthenticated)
      return <Redirect to="/home" />;
    }

     return (
      <div>
        <div style={{ paddingLeft:'180px'}}>
            <Button onClick={this.handleSubmitLogin} simple color="primary" size="lg">
                Sign in
            </Button>
        </div>
        <CardBody>
            <div>
                 Don't have an account? <Link to="/register-page">Register</Link>
            </div>
        </CardBody>
      </div>
        );
    }

}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, loadUser })(SubmitLogin);