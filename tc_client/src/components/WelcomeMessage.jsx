import React from "react";

export default function WelcomeMessage({ username }) {
  return (
    <div className="welcome-message">
      Welcome {username}
    </div>
  );
}