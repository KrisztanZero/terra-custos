import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './AppNavbar.css';
import ConditionalNavLinks from "./ConditionalNavLinks";

export default function AppNavbar({ user, setUser }) {
    return (
        <Navbar bg="success" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Terra Custos</Navbar.Brand>
                <Nav className="mr-auto">
                    {
                        user &&
                        <Nav.Link as={Link} to={`/user/${user.username}`} >
                            Welcome {user.username}
                        </Nav.Link>
                    }
                </Nav>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                            <Nav className="ms-auto">
                                <ConditionalNavLinks user={user} setUser={setUser} />
                            </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}