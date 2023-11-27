import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function GuestUserMenu({ handleClose }) {
  return (
    <>
      <Nav.Link  id="registration" as={Link} to="/registration" onClick={handleClose}>
        Registration
      </Nav.Link>
      <Nav.Link id="login" as={Link} to="/login" onClick={handleClose}>
        Login
      </Nav.Link>
    </>
  );
}
