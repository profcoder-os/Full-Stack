import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="page">
      <h2>Profile</h2>

      <div className="profile-card">
        <img src="https://via.placeholder.com/80" alt="profile" />
        <h3>John Doe</h3>
        <p>Frontend Developer</p>
      </div>
    </div>
  );
};

export default Profile;