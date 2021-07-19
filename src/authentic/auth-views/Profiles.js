import React from "react";
import { Container, Row, Col } from "shards-react";

// konnect stuff
import Discussions from "./../components/blog/Discussions";
import PageTitle from "../components/common/PageTitle";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";


const Profiles = () => (
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
             	<Container fluid className="main-content-container px-4 pb-4">
                    {/* Page Header */}
                    <Row noGutters className="page-header py-4">
                      <PageTitle sm="4" title="Bussiness Profiles" subtitle="Overview" className="text-sm-left" />
                    </Row>
                    
                    <Discussions />
                 

                  </Container>
                 
            <MainFooter />
         </Col>
    </Row>
  </Container>
);

export default Profiles;
