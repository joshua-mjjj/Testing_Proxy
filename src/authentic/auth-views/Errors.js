import React from "react";
import { Container, Row, Col, Button } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const Errors = () => (
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
                    <div className="error">
                      <div className="error__content">
                        <h2>500</h2>
                        <h3>Something went wrong!</h3>
                        <p>There was a problem on our end. Please try again later.</p>
                        <Button pill>&larr; Go Back</Button>
                      </div>
                      <div className="error__content">
                        <h2>404</h2>
                        <h3>Oops, No results found</h3>
                        <p>Try "Dogs in Kampala"</p>
                        <Button pill>&larr; Go Back</Button>
                      </div>
                    </div>
                  </Container>
            <MainFooter />
         </Col>
    </Row>
  </Container>
);

export default Errors;
