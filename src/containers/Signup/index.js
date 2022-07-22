import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import {  useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { signup } from '../../store/actions';


const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

 
  const userSingup = (e) => {
    e.preventDefault();

    const user = { firstName, lastName, email, password}

    dispatch(signup(user))
  }

  
  if(auth.authenticate){
    return <Navigate to='/' />
  }
  
  if(user.loading){
    return <p>loading...!</p>
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSingup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                    errorMessage=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                    errorMessage=""
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                type="email"
                placeholder="Enter email"
                errorMessage=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                errorMessage=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
