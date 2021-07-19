import React, { Component } from "react";
import { 
Container,
Row,
Card,
CardHeader,
ListGroup,
ListGroupItem,
Col,
FormGroup,
Button

} from "shards-react";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProfile } from '../../../actions/profiles';

import PageTitle from "../../components/common/PageTitle";
import UserDetails from "./UserDetails";
import Alerts from '../../layouts/Alerts';
// konnect stuff

import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../../components/layout/MainFooter";
import default_pic from "./blank.png";

export class ServiceProviderCreateProfile extends Component {

  state = {
    lat: '',
    lon: '',
    services: '',
    contact: '',
    email: '',
    profile_picture: '',
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
  //console.log(this.state.profile_picture)

  const { lat,lon,services,contact,email,profile_picture,other } = this.state

  const uploadData = new FormData();
  uploadData.append('lat', lat);
  uploadData.append('lon', lon);
  uploadData.append('services', services);
  uploadData.append('contact', contact);
  uploadData.append('email', email);
  uploadData.append('profile_picture', profile_picture, profile_picture.name);
  uploadData.append('other', other);

 // console.log(this.state)
  this.props.addProfile(uploadData);
  
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
    const { lat,lon,services,contact,email,profile_picture,other } = this.state
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
                         <Alerts />
                                <Row noGutters className="page-header py-4">
                                  <PageTitle title="Service Provider Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
                                </Row>
                              <form onSubmit={this.onSubmit}>
                                <Row>
                                  <Col lg="4">
                                      <Card small className="mb-4 pt-3">
                                        <CardHeader className="border-bottom text-center">
                                          <div className="mb-3 mx-auto">
                                          {
                                            profile_picture ? 
                                            (
                                              <div className="blog-comments__avatar mr-3">
                                                <img
                                                  src={URL.createObjectURL(profile_picture)}
                                                  alt="profile picture"
                                                  style={{ 'height': '150px', 'width' : '140px' }}
                                                  width="200"
                                                  />
                                              </div>
                                            
                                            ) : 
                                            (
                                              <div className="blog-comments__avatar mr-3">
                                                <img
                                                  className="rounded-circle"
                                                  src={default_pic}
                                                  alt="profile picture"
                                                  style={{ 'height': '150px', 'width' : '140px' }}
                                                  width="200"
                                                />
                                              </div>
                                              
                                            )
                                          }
                                          </div>
                                          <h4 className="mb-0">Profile Picture</h4>
                                          <Button pill size="sm" className="mb-2">
                                            <input type="file" onChange={(evt) => this.setState({ profile_picture: evt.target.files[0] })} required="required"/>
                                            <i className="material-icons mr-1">person_add</i>
                                          </Button>
                                        </CardHeader>
                                        <ListGroup flush>
                                          <ListGroupItem className="p-4">
                                            <strong className="text-muted d-block mb-2">
                                              Description
                                            </strong>
                                            <span>Lorem ipsum dolor sit amet 
                                            consectetur adipisicing elit. Odio 
                                            eaque, quidem, commodi soluta qui quae minima 
                                            obcaecati quod dolorum sint alias,
                                             possimus illum assumenda eligendi cumque?</span>
                                          </ListGroupItem>
                                        </ListGroup>
                                      </Card>

                                  </Col>
                                  <Col lg="8">
                                    <Card small className="mb-4">
                                        <CardHeader className="border-bottom">
                                          <h6 className="m-0">Profile Details</h6>
                                        </CardHeader>
                                        <ListGroup flush>
                                          <ListGroupItem className="p-3">
                                            <Row>
                                              <Col>
                                               
                                                  <Row form>
                                                    {/* First Name */}
                                                    <Col md="6" className="form-group">
                                                      <label htmlFor="feFirstName">Latitude(Bussiness Location Details)</label>
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="Latitude"
                                                          name="lat"
                                                          onChange={this.onChange}
                                                          value={lat}
                                                          required
                                                        />
                                                    </Col>
                                                    {/* Last Name */}
                                                    <Col md="6" className="form-group">
                                                      <label htmlFor="feLastName">Longitude(Bussiness Location Details)</label>
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          name="lon"
                                                          placeholder="Longitude"
                                                          onChange={this.onChange}
                                                          value={lon}
                                                          required
                                                        />
                                                    </Col>
                                                  </Row>
                                                  <Row form>
                                                    {/* Email */}
                                                    <Col md="6" className="form-group">
                                                      <label htmlFor="feEmail">Email</label>
                                                      <input
                                                          className="form-control"
                                                          type="email"
                                                          name="email"
                                                          onChange={this.onChange}
                                                          value={email}
                                                          required
                                                        />
                                                    </Col>
                                                    {/* Password */}
                                                    <Col md="6" className="form-group">
                                                      <label htmlFor="fePassword">Contact</label>
                                                      <input
                                                        className="form-control"
                                                        type="text"
                                                        name="contact"
                                                        onChange={this.onChange}
                                                        value={contact}
                                                        required
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <FormGroup>
                                                    <label htmlFor="feAddress">Brief Description of Services you offer</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="services"
                                                        onChange={this.onChange}
                                                        value={services}
                                                        required
                                                      />
                                                  </FormGroup>
                                                  <Row form>
                                                    {/* Description */}
                                                    <Col md="12" className="form-group">
                                                      <label htmlFor="feDescription">Other relevant Info</label>
                                                      <textarea
                                                        className="form-control"
                                                        type="text"
                                                        name="other"
                                                        onChange={this.onChange}
                                                        value={other}
                                                        required
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Button theme="accent">Create Profile</Button>                                               
                                              </Col>
                                            </Row>
                                          </ListGroupItem>
                                        </ListGroup>
                                      </Card>
                                  </Col>
                                </Row>
                              </form>
                          </Container>
                    <MainFooter />
                 </Col>
            </Row>
          </Container> 
      );
  }
}

export default connect(null, { addProfile })(ServiceProviderCreateProfile);

 