import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="title">Dashboard</h2>

      <div className="card-container">
        <div className="card">
          <h3>Users</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Sales</h3>
          <p>450</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>$12,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;