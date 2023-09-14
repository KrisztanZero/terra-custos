import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '../services/userService';
import { Card, Container } from 'react-bootstrap';

export default function User() {
    const { username } = useParams();
    const [user, setUser] = useState(null);

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
                    setUser(null);
                }, 20000);
            }
        };

        fetchUser();
    }, [username]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h2>User Profile: {user.username}</h2>
            <Card>
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Container>
    );
}