import React from 'react';
import { Button } from 'react-bootstrap';

const UpdateButton = ({ onClick }) => (
  <Button id="edit-profile-button" variant="success" onClick={onClick}>
    Edit Profile
  </Button>
);

export default UpdateButton;
