import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register, checkUsernameAndEmail } from '../services/authService';
import { validateEmail } from '../utils/validateEmail';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigte = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (!username.trim() && !password.trim() && !email.trim()) {
        setError('Please fill in all fields.');
        return;
      }

      if (!username.trim()) {
        setError('Please enter username');
        return;
      }

      if (!password.trim()) {
        setError('Please enter password');
        return;
      }

      if (!email.trim()) {
        setError('Please enter email');
        return;
      }

      if (!validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }

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
      <Form id="registration-form" onSubmit={handleRegister} noValidate>
        <Form.Group controlId="registration-username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="registration-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="registration-email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {error && <Alert id="registration-error-message" variant="danger">{error}</Alert>}
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
