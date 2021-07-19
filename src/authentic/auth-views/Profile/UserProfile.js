import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "shards-react";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../../actions/profiles';

import PageTitle from "../../components/common/PageTitle";
import UserDetails from "./UserDetails";
import UserAccountDetails from "./UserAccountDetails";

// konnect stuff

import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../../components/layout/MainFooter";

export class UserProfileLite extends Component {

  static propTypes = {
  profiles: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,
  };
  componentDidMount(){
    this.props.getProfiles();
  }

  render() {
    return(
         <Container fluid>
            <Row>
             <MainSidebar />
                 <Col
                  className="main-content p-0"
                  lg={{ size: 10, offset: 2 }}
                  md={{ size: 9, offset: 3 }}
                  sm="12"
                  tag="main"
                   >
                    <MainNavbar />
                         <Container fluid className="main-content-container px-4">
                                <Row noGutters className="page-header py-4">
                                  <PageTitle title="konnect Profiles" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
                                </Row>
                                <Row>
                                  <Col lg="4">
                                    <UserDetails />
                                  </Col>
                                  <Col lg="8">
                                    <UserAccountDetails />
                                  </Col>
                                </Row>

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

                          </Container>
                    <MainFooter />
                 </Col>
            </Row>
          </Container> 
      );
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles })(UserProfileLite);

 