import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { 
Container,
Row,
Card,
CardHeader,
ListGroup,
ListGroupItem,
Col,
FormGroup,
Button,
Progress

} from "shards-react";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editProfile, getProfile, deleteProfile } from '../../../actions/profiles';

import PageTitle from "../../components/common/PageTitle";
import Alerts from '../../layouts/Alerts';
// konnect stuff

import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../../components/layout/MainFooter";

export class ServiceProviderCreateProfile extends Component {
constructor(props){
  super(props);
  // const { lat,lon,services,contact,email,other } = this.props.profile
  this.state = {
  lat: '',
  lon: '',
  services: '',
  contact: '',
  email: '',
  profile_picture: '',
  other: '',
  changing_pic: false
};

  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
  this.delete_profile = this.delete_profile.bind(this)
}

static propTypes = {
  profile: PropTypes.array.isRequired,
  getProfile: PropTypes.func.isRequired,
  editProfile : PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired
  };
  
  onChange = e => this.setState({
    [e.target.name]: e.target.value
  });
  
  onSubmit = e => {

  e.preventDefault();
  //console.log(this.state)
  const { lat,lon,services,contact,email,profile_picture,other } = this.state
  
  const uploadData = new FormData();
  uploadData.append('lat', lat);
  uploadData.append('lon', lon);
  uploadData.append('services', services);
  uploadData.append('contact', contact);
  uploadData.append('email', email);
  uploadData.append('profile_picture', profile_picture, profile_picture.name);
  uploadData.append('other', other);

  this.props.editProfile(this.props.match.params.id, uploadData);

  }
  
  delete_profile = e => {
    //alert('Are you sure?')
    this.props.deleteProfile(this.props.match.params.id)
    window.location.href = "/service-motor-profiles";
  }
  componentDidMount(){
  this.props.getProfile(this.props.match.params.id);
  }

  render() {

    if(!this.props.profile){
       return <Redirect to="/service-motor-profiles" />;
    }

    const { lat,lon,services,contact,email,profile_picture,other,changing_pic } = this.state
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
                     <Alerts />
                         <Container fluid className="main-content-container px-4">
                         
                                <Row noGutters className="page-header py-4">
                                  <PageTitle title="Service Provider Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
                                </Row>
                              <form onSubmit={this.onSubmit}>
                                <Row>
                                  <Col lg="4">
                                    
                                     <Card small className="mb-4 pt-3">
                                        <ListGroup flush>
                                          <ListGroupItem className="px-4">
                                            <div className="progress-wrapper">
                                              <strong className="text-muted d-block mb-2">
                                              <h4 className="mb-0">Profile</h4>
                                              Edit this profile by filling in the new info in the form.
                                              </strong>
                                              <Progress
                                                className="progress-sm"
                                                //value={userDetails.performanceReportValue}
                                              >
                                              </Progress>
                                            </div>
                                          </ListGroupItem>
                                          <ListGroupItem className="p-4">
                                            <strong className="text-muted d-block mb-2">
                                               Profile Details
                                            </strong>
                                            <strong>Location Details</strong><br/>
                                            <span>Latitude</span>: <span>{this.props.profile.lat}</span><br/>
                                            <span>Longitude</span>: <span>{this.props.profile.lon}</span><br/>
                                            <strong>Other Details</strong><br/>
                                            <span>Contact</span>: <span>{this.props.profile.contact}</span><br/>
                                            <span>Email</span>: <span>{this.props.profile.email}</span><br/>
                                            <span>Services</span>: <span>{this.props.profile.services}</span><br/>
                                            <span>Other</span>: <span>{this.props.profile.other}</span><br/>
                                          </ListGroupItem>
                                        </ListGroup>
                                        <CardHeader className="border-bottom text-center">
                                          <div className="mb-3 mx-auto">
                                            {
                                            changing_pic ? 
                                            (
                                              <img
                                                
                                                src={URL.createObjectURL(profile_picture)}
                                                alt="profile picture"
                                                width="150"
                                              />
                                            ) : 
                                            (
                                              <img
                                               
                                                src={this.props.profile.profile_picture}
                                                
                                                alt="Profile Picture"
                                                width="150"
                                            />
                                            )
                                          }
                                          </div>
                                          <span className="text-muted d-block mb-2">Profile Picture</span>
                                          <Button pill size="sm">
                                           <input type="file" onChange={(evt) => this.setState({ profile_picture: evt.target.files[0], changing_pic: true })} required="required"/>
                                           Upload new
                                          </Button>
                                        </CardHeader>

                                      </Card>

                                  </Col>
                                  <Col lg="8">
                                    <Card small className="mb-4">
                                        <CardHeader className="border-bottom">
                                          <h6 className="m-0">Profile Details</h6>
                                          <h6 className="m-0">Profile ID: {this.props.match.params.id}</h6>
                                        
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
                                                  <ListGroupItem className="d-flex px-3 border-0">
                                                     <Button theme="accent" >Update Profile</Button>
                                                     <Button theme="accent" onClick={this.delete_profile} className="ml-auto">Delete Profile</Button>
                                                  </ListGroupItem>
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

const mapStateToProps = state => ({
  profile: state.profiles.profile
});

export default connect(mapStateToProps, { getProfile, editProfile, deleteProfile })(ServiceProviderCreateProfile);

 