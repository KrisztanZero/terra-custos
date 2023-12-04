import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import LogoutButton from '../../buttons/LogoutButton';
import { getUserRoles } from '../../../services/roleService';
import { useState, useEffect } from 'react';

export default function RegisteredUserMenu({ handleClose, user, setUser }) {
  const [userRoles, setUserRoles] = useState(null);
  useEffect(() => {
    getUserRoles().then((data) => setUserRoles(data.roles));
  }, []);
  return (
    <>
      <Nav.Link
        id="link-to-profile"
        as={Link}
        to={`/user`}
        onClick={handleClose}
      >
        Profile
      </Nav.Link>
      <Nav.Link id="link-to-user-tours" as={Link} to="/" onClick={handleClose}>
        My Tours
      </Nav.Link>
      {userRoles?.includes('PREMIUM') && (
        <Nav.Link id="link-to-premium" as={Link} to="/" onClick={handleClose}>
          Premium features
        </Nav.Link>
      )}
      {userRoles?.includes('ADMIN') && (
        <Nav.Link id="link-to-admin" as={Link} to="/" onClick={handleClose}>
          Admin page
        </Nav.Link>
      )}
      <Nav.Link id="link-to-settings" as={Link} to="/" onClick={handleClose}>
        Settings
      </Nav.Link>
      <Nav.Link onClick={handleClose}>
        <LogoutButton setUser={setUser} user={user}/>
      </Nav.Link>
    </>
  );
}
