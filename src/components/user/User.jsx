import React, { useEffect, useState } from 'react';
import { Spinner, Container } from 'react-bootstrap';
import UserCard from './UserCard';
import UserNotFound from './UserNotFound';
import '../../customStyles/text-shadow.css';

export default function User({ user }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [user]);

  if (isLoading) {
    return (
      <Container
        id="loading-screen"
        className="text-center mt-5 bg-transparent"
      >
        <Spinner animation="border" role="status">
          <span className="sr-only "></span>
        </Spinner>
        <p id="loading-text" className="text-white my-3 fs-5">
          Loading...
        </p>
      </Container>
    );
  }

  if (!user) {
    return <UserNotFound />;
  }

  return <UserCard user={user} />;
}
