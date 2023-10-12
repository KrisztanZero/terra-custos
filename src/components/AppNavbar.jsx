import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './AppNavbar.css';
import ProfileOffcanvas from './ProfileOffcanvas';
import WelcomeMessage from './WelcomeMessage';
import RoleBadge from './RoleBadge';

export default function AppNavbar({ user, setUser }) {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Terra Custos
        </Navbar.Brand>
        <Nav className="mr-auto">
          {user && (
            <>
              <Nav.Link as={Link} to={`/user`}>
                <WelcomeMessage username={user.username} />
              </Nav.Link>
              <Nav.Link className="disabled">
                <RoleBadge />
              </Nav.Link>
            </>
          )}
        </Nav>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <ProfileOffcanvas user={user} setUser={setUser} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
