import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profiles';

export class Profiles extends Component {
	static propTypes = {
		profiles: PropTypes.array.isRequired,
		getProfiles: PropTypes.func.isRequired,
	};
  componentDidMount(){
  	this.props.getProfiles();
  }
  render() {
    return (
    	<Fragment>
        	<h3>Service Provider Profile</h3>
        	  <table className="table table-striped">
          <thead>
            <tr>
              <th>No.</th>

              <th>Latitude</th>
              <th>Longitude</th>
              <th>Cordinate</th>
              <th>Services you offer</th>
               <th>Contact</th>
               <th>Email</th>
               <th>Other relevant Info</th>
             
            </tr>
          </thead>

          <tbody>
            {this.props.profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>

                <td>{profile.lat}</td>
                <td>{profile.lon}</td>
                <td>{profile.cordinate}</td>
                <td>{profile.services}</td>
                <td>{profile.contact}</td>
                <td>{profile.email}</td>
                 <td>{profile.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
	profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
