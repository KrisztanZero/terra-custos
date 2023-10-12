import React, { useState } from 'react';
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import RegisteredUserMenu from './RegisteredUserMenu';
import GuestUserMenu from './GuestUserMenu';

import profileIcon from '../media/profile.png';
import '../customStyles/text-shadow.css';

export default function ProfileOffcanvas({ user, setUser }) {
  const [showProfile, setShowProfile] = useState(false);

  const handleClose = () => setShowProfile(false);
  const handleShow = () => setShowProfile(true);

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        className="custom-text-shadow"
      >
        <img
          src={profileIcon}
          alt="profile home icon"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Button>

      <Offcanvas
        show={showProfile}
        onHide={handleClose}
        placement="end"
        className="bg-transparent text-white custom-text-shadow"
        style={{ width: '10%' }}
      >
        <Offcanvas.Header>
          <div className="d-flex align-items-center">
            <img
              src={profileIcon}
              alt="profile icon"
              width="30"
              height="30"
              className="me-2"
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-transparent">
          <Nav className="flex-column">
            {user ? (
              <RegisteredUserMenu setUser={setUser} handleClose={handleClose} />
            ) : (
              <GuestUserMenu handleClose={handleClose} />
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
