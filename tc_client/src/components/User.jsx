import React, { useEffect, useState } from 'react';
import { Card, Container, Alert, Spinner } from 'react-bootstrap';
import '../customStyles/text-shadow.css';

export default function User({user}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
    }, [user]);

    if (isLoading) {
        return (
            <Container className="text-center mt-5 bg-transparent">
                <Spinner animation="border" role="status">
                    <span className="sr-only "></span>
                </Spinner>
                <p className='text-white my-3 fs-5'>Loading...</p>
            </Container>
        );
    }

    if (!user) {
        return (
            <Container className="text-center custom-text-shadow">
                <Alert variant="danger" className='my-3 fs-5'>User not found.</Alert>
            </Container>
        );
    }

    return (
        <Container>
            <Card className='w-50  mx-auto m-5 bg-transparent text-white custom-text-shadow'>
                <Card.Body >
                    <Card.Title >{user.username}</Card.Title>
                    <Card.Subtitle className="m-3">{user.email}</Card.Subtitle>
                    <Card.Text className="m-3">{user.description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}