import React from 'react';
import '../customStyles/text-shadow.css';

export default function WelcomeMessage({ username }) {
  return (
    <div id="navbar-welcome-message" className="text-white custom-text-shadow">Welcome {username}</div>
  );
}
