import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

// konnect stuff

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const UserProfileLite = () => (
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
                          <PageTitle title="Bussiness Profiles" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
                        </Row>
                        <Row>
                          <Col lg="4">
                            <UserDetails />
                          </Col>
                          <Col lg="8">
                            <UserAccountDetails />
                          </Col>
                        </Row>
                  </Container>
            <MainFooter />
         </Col>
    </Row>
  </Container>
);

export default UserProfileLite;
