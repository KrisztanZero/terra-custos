import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register, checkUsernameAndEmail } from '../services/authService';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigte = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const availabilityResponse = await checkUsernameAndEmail(username, email);
      if (availabilityResponse !== 'Username and email are available') {
        setError(availabilityResponse);
        return;
      }

      const newUser = {
        username: username,
        password: password,
        email: email,
      };

      const addedUser = await register(newUser);

      console.log('Registration successful:', addedUser);
      navigte('/login');
    } catch (error) {
      console.log('Registration error:\n', error);

      setError(`Registration error: ${error.message}`, error);
    }
  };

  return (
    <Container className=" w-50 mt-5">
      <Form id="registration-form" onSubmit={handleRegister}>
        <Form.Group controlId="registration-username-form-group">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="registration-password-form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="registration-email-form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button
          id="create-account"
          type="submit"
          variant="primary"
          className="mt-3"
        >
          Create Account
        </Button>
      </Form>
    </Container>
  );
}
