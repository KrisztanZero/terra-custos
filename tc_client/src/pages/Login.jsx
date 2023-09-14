import React, { useState } from 'react';
import { getUserByUsername, getUserByEmail } from '../services/userService';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default function Login({setUser}) {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        let user = getUserByUsername(usernameOrEmail);
        if(!user){
            user = getUserByEmail(usernameOrEmail);
        }

        if (!user) {
            setError('User not found');
            return;
        }

        if (user.password !== password) {
            setError('Incorrect password');
            return;
        }

        console.log('Login successful:', user);
        setUser(user);
        navigate('/');
    };

    return (
        <Container>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicUsernameOrEmail">
                    <Form.Label>Username or email:</Form.Label>
                    <Form.Control
                        type="text"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button type="submit" variant='primary' className='mt-3'>Login</Button>
            </Form>
        </Container>
    );
}