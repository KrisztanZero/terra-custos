import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import LogoutButton from './LogoutButton';
import { getUserRoles } from '../services/roleService';
import { useState, useEffect } from 'react';

export default function RegisteredUserMenu({ handleClose, setUser }) {
  const [userRoles, setUserRoles] = useState(null);
  useEffect(() => {
    getUserRoles().then((data) => setUserRoles(data.roles));
  }, []);
  return (
    <>
      <Nav.Link as={Link} to={`/user`} onClick={handleClose}>
        Profile
      </Nav.Link>
      <Nav.Link as={Link} to="/" onClick={handleClose}>
        Settings
      </Nav.Link>
      <Nav.Link as={Link} to="/" onClick={handleClose}>
        My Tours
      </Nav.Link>
      {userRoles?.includes('PREMIUM') && (
        <Nav.Link as={Link} to="/" onClick={handleClose}>
          Premium
        </Nav.Link>
      )}
      {userRoles?.includes('ADMIN') && (
        <Nav.Link as={Link} to="/" onClick={handleClose}>
          Admin
        </Nav.Link>
      )}
      <Nav.Link onClick={handleClose}>
        <LogoutButton setUser={setUser} />
      </Nav.Link>
    </>
  );
}
