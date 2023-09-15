import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import LogoutButton from "./LogoutButton";
import profileIcon from '../media/profile.png';

export default function ProfileOffcanvas({ user, setUser }) {
    const [showProfile, setShowProfile] = useState(false);

    const handleClose = () => setShowProfile(false);
    const handleShow = () => setShowProfile(true);

    return (
        <>
            <Button variant="link" onClick={handleShow}>
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
                className="bg-success"
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
                <Offcanvas.Body className="bg-success">
                    <Nav className="flex-column">
                        {user ? (
                            <>
                                <Nav.Link as={Link} to={`/user/${user.username}`} onClick={handleClose}>Profile</Nav.Link>
                                <Nav.Link as={Link} to="/" onClick={handleClose}>Settings</Nav.Link>
                                <Nav.Link as={Link} to="/" onClick={handleClose}>My Tours</Nav.Link>
                                <Nav.Link onClick={handleClose} ><LogoutButton setUser={setUser} /></Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/registration" onClick={handleClose}>Sign Up</Nav.Link>
                                <Nav.Link as={Link} to="/login" onClick={handleClose}>Sign In</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}