import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const AddNewPost = () => (
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
                      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
                    </Row>

                    <Row>
                      {/* Editor */}
                      <Col lg="9" md="12">
                        <Editor />
                      </Col>
                      {/* Sidebar Widgets */}
                      <Col lg="3" md="12">
                        <SidebarActions />
                        <SidebarCategories />
                      </Col>
                    </Row>
                  </Container>
            <MainFooter />
         </Col>
    </Row>
  </Container>
);

export default AddNewPost;
