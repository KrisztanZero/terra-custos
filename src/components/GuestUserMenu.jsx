import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function GuestUserMenu({ handleClose }) {
  return (
    <>
      <Nav.Link as={Link} to="/registration" onClick={handleClose}>
        Sign Up
      </Nav.Link>
      <Nav.Link as={Link} to="/login" onClick={handleClose}>
        Sign In
      </Nav.Link>
    </>
  );
}
