import React from "react";
import Layout from "../../components/Layout";
import { Row, Col, Container } from "react-bootstrap";
import './style.css';
const Home = () => {
  return (
    <Layout>
      {/* <div className="d-flex justify-content-center align-items-center h-100 mt-5">
        <div class="container-fluid text-sm-center p-5 bg-light">
          <h1 class="display-2">Welcome to Admin Dashboard</h1>
          <p class="lead">admin dashboard to manage the ecommerce app!</p>
        </div>
      </div> */}
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">sidebar</Col>
          <Col md={10} className="__container">container</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
