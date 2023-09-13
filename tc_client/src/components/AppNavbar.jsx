import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import homeIcon from '../media/home.png';
import './AppNavbar.css';

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Terra Custos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <NavDropdown
                            title={<img src={homeIcon}
                                alt="profile home icon"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/registration">Registration</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}