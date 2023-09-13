import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Terra Custos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/registration">Registration</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}