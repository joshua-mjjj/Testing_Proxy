import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '.../../actions/auth';
import { createMessage } from '.../../actions/messages';


import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";



export class SubmitRegister extends Component{
    static propTypes = {
      register: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool
    };


    handleSubmitLogin = (e) => {
      var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
      if (!mailFormat.test(this.props.credentials.email_contct)) {
          alert( "Email Address / Phone number is not valid, Please provide a valid Email or phone number ");
          return false;
      }else if(this.props.credentials.pasword.length <= 10){
        alert( "Password must not be less than 10 characters and must contain capital, small letters and preferably numbers! ");
         return false;
      }else if (this.props.credentials.pasword !== this.props.credentials.pasword2) {
        this.props.createMessage({ passwordNotMatch: 'Passwords do not match!' });
        return false;
     }
      else {
      }
       console.log(this.props.credentials.name)
       console.log(this.props.credentials.email_contct)
       console.log(this.props.credentials.pasword)
       console.log(this.props.credentials.pasword2)
       console.log(this.props)
       
       const newUser = { 
          username: this.props.credentials.name,
          email:  this.props.credentials.email_contct,
          password: this.props.credentials.pasword
        }
       this.props.register(newUser)
     }  

    render(){
      if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }
     return (
      <div>
        <div style={{ paddingLeft:'180px'}}>
            <Button onClick={this.handleSubmitLogin} simple color="primary" size="lg">
                Register
            </Button>
        </div>
        <CardBody>
          <div>
               Already have an account? <Link to="/login-page">Login</Link>
          </div>
      </CardBody>
         
      </div> 
        );
    }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(SubmitRegister);
