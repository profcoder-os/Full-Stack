import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="dashboard-box">
        <h3>Total Users</h3>
        <p>150</p>
      </div>

      <div className="dashboard-box">
        <h3>Revenue</h3>
        <p>$12,500</p>
      </div>
    </div>
  );
};

export default Dashboard;