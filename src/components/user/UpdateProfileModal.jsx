import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateProfileModal = ({ user, onSave, onClose }) => {
  const [updatedProfile, setupdatedProfile] = useState({
    username: user.username,
    email: user.email,
    introduction: user.introduction || '',
  });

  const handleSaveChanges = () => {
    onSave(updatedProfile);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={updatedProfile.username}
              onChange={(e) =>
                setupdatedProfile({ ...updatedProfile, username: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={updatedProfile.email}
              onChange={(e) =>
                setupdatedProfile({ ...updatedProfile, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formIntroduction">
            <Form.Label>Introduction</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={updatedProfile.introduction}
              onChange={(e) =>
                setupdatedProfile({
                  ...updatedProfile,
                  introduction: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button id="update-profile-button" variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProfileModal;
