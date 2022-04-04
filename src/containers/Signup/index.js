import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                    errorMessage=""
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                    errorMessage=""
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                type="email"
                placeholder="Enter email"
                errorMessage=""
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                errorMessage=""
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
