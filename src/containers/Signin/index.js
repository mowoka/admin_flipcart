import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import {login} from '../../store/actions'

const Signin = () => {

  const userLogin = (e) => {
    e.preventDefault();
    
    const user = {
      email:'giomowoka@gmail.com',
      password: 'mowoka123'
    };

    login(user);
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
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

              <Button  variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
