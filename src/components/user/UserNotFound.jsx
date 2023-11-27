import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import '../../customStyles/text-shadow.css';

const UserNotFound = () => (
  <Container
    id="user-not-found-container"
    className="text-center custom-text-shadow"
  >
    <Alert variant="danger" className="my-3 fs-5">
      User not found.
    </Alert>
  </Container>
);

export default UserNotFound;