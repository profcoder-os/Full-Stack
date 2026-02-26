import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="page">
      <h2>Settings</h2>

      <div className="settings-container">
        <label>Username</label>
        <input type="text" placeholder="Enter username" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <button>Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;