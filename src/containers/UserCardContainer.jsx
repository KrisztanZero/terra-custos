import React, { useState } from 'react';
import { getSessionToken } from '../utils/authUtils';
import UserCard from '../components/user/UserCard';
import UpdateProfileModal from '../components/user/UpdateProfileModal';

const UserCardContainer = ({ user, setUser}) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUpdateProfileClick = () => {
    const authInfo = getSessionToken();

    if (authInfo.error) {
      setErrorMessage(authInfo.error);
      return;
    }

    setShowProfileModal(true);
  };

  const handleSaveProfile = async (editedProfile) => {
    try {
        const { token, error } = getSessionToken();

        if (error) {
          setErrorMessage(error);
          return;
        }
        console.log('Edited Profile:', editedProfile);
        console.log(JSON.stringify(editedProfile));

    const response = await fetch('http://localhost:7021/api/user/update-user', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedProfile),
    });

    if (!response.ok) {
      console.error('Failed to update user profile:', response.statusText);
      return;
    }

    const updatedUser = await response.json();
    console.log('Updated user profile:', updatedUser);

    setUser(updatedUser);
    handleCloseProfileModal();
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <>
      <UserCard
        user={user}
        handleUpdateProfileClick={handleUpdateProfileClick}
      />
      {showProfileModal && (
        <UpdateProfileModal
          user={user}
          onSave={handleSaveProfile}
          onClose={handleCloseProfileModal}
        />
      )}
      {errorMessage && <div>Error: {errorMessage}</div>}
    </>
  );
};

export default UserCardContainer;
