import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../../actions/profiles';


import {
  Card,
  Container,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import Alerts from '../../layouts/Alerts';

import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../../components/layout/MainFooter";


export class ServiceProviderProfiles extends Component {

  static propTypes = {
  profiles: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,
  };
  componentDidMount(){
    this.props.getProfiles();
  }

  render(){
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
                        <Container fluid className="main-content-container px-4 pb-4">
                              {/* Page Header */}
                              <Row noGutters className="page-header py-4">
                                <PageTitle sm="4" title="Your Profiles" subtitle="Overview" className="text-sm-left" />
                              </Row>
                              
                                <Card small className="blog-comments">
                                        <CardHeader className="border-bottom">
                                          <h6 className="m-0">Service Provider(Motor) Profiles</h6>
                                        </CardHeader>

                                        <CardBody className="p-0">
                                          {this.props.profiles.map((profile, idx) => (
                                            <div key={idx} className="blog-comments__item d-flex p-3">
                                    

                                              {/* Content */}
                                              <div className="blog-comments__content">
                                                {/* Content :: Title */}
                                                <div className="blog-comments__meta text-mutes">
                                                  <span className="text-secondary">
                                                    {profile.services}
                                                  </span>
                                                </div>

                                                {/* Content :: Body */}
                                                <p className="m-0 my-1 mb-2 text-muted">{profile.contact}</p>
                                                
                                                {/* Content :: Actions */}
                                                <div className="blog-comments__actions">
                                                  <ButtonGroup size="sm">
                                                    <Link to={`/edit-view-service-motor-profile/${profile.id}`}>
                                                      <Button theme="white">
                                                        <span className="text-light">
                                                          <i className="material-icons">more_vert</i>
                                                        </span>{" "}
                                                        Edit
                                                      </Button>
                                                     </Link> 
                                                  </ButtonGroup>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </CardBody>

                                        <CardFooter className="border-top">
                                          <Row>
                                            <Col className="text-center view-report">
                                               <Link to="/profile-types">
                                                 <Button theme="white" type="submit">
                                                    Create New Profile
                                                </Button>
                                              </Link> 
                                            </Col>
                                          </Row>
                                        </CardFooter>
                                      </Card>
                           

                            </Container>
                           
                      <MainFooter />
                   </Col>
              </Row>
            </Container>

      )
  }

}

const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles })(ServiceProviderProfiles);

