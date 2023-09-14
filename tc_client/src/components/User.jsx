import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '../services/userService';
import { Card, Container, Alert, Spinner } from 'react-bootstrap';

export default function User() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserByUsername(username);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            }
        };

        fetchUser();
    }, [username]);

    if (isLoading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
                <p className='text-success my-3 fs-5'>Loading...</p>
            </Container>
        );
    }

    if (!user) {
        return (
            <Container className="text-center">
                <Alert variant="danger" className='my-3 fs-5'>User not found.</Alert>
            </Container>
        );
    }

    return (
        <Container>
            <Card className='w-50  mx-auto m-5'>
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Subtitle className="m-3 text-muted">{user.email}</Card.Subtitle>
                    <Card.Text className="m-3 text-muted">{user.description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}