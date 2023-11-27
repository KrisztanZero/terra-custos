import React, { useEffect, useState } from 'react';
import { Card, Container, Alert, Spinner } from 'react-bootstrap';
import '../customStyles/text-shadow.css';

export default function User({ user }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [user]);

  if (isLoading) {
    return (
      <Container id="loading-screen" className="text-center mt-5 bg-transparent">
        <Spinner animation="border" role="status">
          <span className="sr-only "></span>
        </Spinner>
        <p id="loading-text" className="text-white my-3 fs-5">Loading...</p>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container id="user-not-found-container" className="text-center custom-text-shadow">
        <Alert variant="danger" className="my-3 fs-5">
          User not found.
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Card id="user-card" className="w-50  mx-auto m-5 bg-transparent text-white custom-text-shadow">
        <Card.Body id="user-card-body">
          <Card.Title id="user-card-title"><span>User Name</span><br />{user.username}</Card.Title>
          <Card.Subtitle id="user-card-subtitle" className="m-3"> <span>E-mail</span><br />{user.email}</Card.Subtitle>
          <Card.Text id="user-card-text" className="m-3"><span>Introduction</span><br />{user.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
