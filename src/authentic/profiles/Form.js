import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProfile } from '../../actions/profiles';

export class Form extends Component {
  state = {
    lat: '',
    lon: '',
    services: '',
    contact: '',
    email: '',
    other: ''
  }; 

  static propTypes = {
    addProfile: PropTypes.func.isRequired,
  };

  onChange = e => this.setState({
    [e.target.name]: e.target.value
  });

  onSubmit = e => {
    e.preventDefault();
    const { lat,lon,services,contact,email,other } = this.state
    const profile = { lat,lon,services,contact,email,other };

    console.log(this.state)
    this.props.addProfile(profile);
    
      this.setState({
        lat: '',
        lon: '',
        services: '',
        contact: '',
        email: '',
        other: ''
      }); 
  }
 
  render() {
    const { lat,lon,services,contact,email,other } = this.state
    return (
      <Fragment>
        <div className="card card-body mt-4 mb-4">
          <h2>Add Profile Details</h2>

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Latitude(Bussiness Location Details)</label>
              <input
                className="form-control"
                type="text"
                name="lat"
                onChange={this.onChange}
                value={lat}
                required
              />
            </div>
            <div className="form-group">
              <label>Longitude(Bussiness Location Details)</label>
              <input
                className="form-control"
                type="text"
                name="lon"
                onChange={this.onChange}
                value={lon}
                required
              />
            </div>
            <div className="form-group">
              <label>Services you offer</label>
              <input
                className="form-control"
                type="text"
                name="services"
                onChange={this.onChange}
                value={services}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                className="form-control"
                type="text"
                name="contact"
                onChange={this.onChange}
                value={contact}
                required
              />
            </div>
            <div className="form-group">
              <label>Email(Optional)</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Other relevant Info about you as a service Provider</label>
              <textarea
                className="form-control"
                type="text"
                name="other"
                onChange={this.onChange}
                value={other}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}


export default connect(null, { addProfile } )(Form);
