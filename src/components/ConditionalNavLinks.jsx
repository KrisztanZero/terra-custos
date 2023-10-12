import React from "react";
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import LogoutButton from "./LogoutButton";
import profileIcon from '../media/profile.png';

export default function ConditionalNavLinks({ user, setUser }) {
    return (
        <NavDropdown
            title={<img src={profileIcon}
                alt="profile home icon"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />}
            id="basic-nav-dropdown"
        >

            {!user && (
                <>
                    <NavDropdown.Item as={Link} to="/registration" >Sign Up</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/login">Sign In</NavDropdown.Item>
                </>
            )}
            {user && (
                <>
                    <NavDropdown.Item as={Link} to="/" >Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" >Settings</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" >My Tours</NavDropdown.Item>
                    <NavDropdown.Item ><LogoutButton setUser={setUser} /></NavDropdown.Item>
                </>
            )}
        </NavDropdown>
    );

}