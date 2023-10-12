import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { validateEmail } from '../utils/validateEmail';
import Cookies from 'universal-cookie';

export default function Login({ setUser }) {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let email = '';
      let username = '';
      if (validateEmail(credential)) {
        email = credential;
      } else {
        username = credential;
      }

      const loginData = {
        username: username,
        password: password,
        email: email,
      };

      const loginResponse = await login(loginData);

      console.log('Login successful:', loginResponse);
      const cookies = new Cookies();
      cookies.set('sessionToken', loginResponse.sessionToken, { path: '/' });
      setUser(loginResponse.user);
      navigate('/');
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <Container className="w-50 mt-5">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicUsernameOrEmail">
          <Form.Label>Username or email</Form.Label>
          <Form.Control
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}
