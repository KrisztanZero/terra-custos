import React from "react";
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import LogoutButton from "./LogoutButton";
import homeIcon from '../media/profile.png';

export default function ConditionalNavLinks({ user, setUser }) {
    if (user) {
        return (
            <NavDropdown
                title={<img src={homeIcon}
                    alt="profile home icon"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />}
                id="basic-nav-dropdown"
            >
                <NavDropdown.Item as={Link} to="/registration" >Registration</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                <NavDropdown.Item ><LogoutButton setUser={setUser} /></NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        return (
            <NavDropdown
                title={<img src={homeIcon}
                    alt="profile home icon"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />}
                id="basic-nav-dropdown"
            >
                <NavDropdown.Item as={Link} to="/registration" >Registration</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            </NavDropdown>
        );
    }
}