import React from 'react';
import { Button } from 'react-bootstrap';

const UpdateButton = ({ onClick }) => (
  <Button variant="success" onClick={onClick}>
    Edit Profile
  </Button>
);

export default UpdateButton;
