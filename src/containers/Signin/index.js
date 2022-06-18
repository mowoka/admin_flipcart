import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import {isUserLoggedIn, login} from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const Signin = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();
    
    const user = {
      email,
      password 
    };

    dispatch(login(user));

    if(auth.authenticate){
      return <Navigate to='/' />
    }
  }

  if(auth.authenticate){
    return <Navigate to='/' />
  }
 
  // eslint-disable-next-line react-hooks/rules-of-hooks


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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage=""
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
