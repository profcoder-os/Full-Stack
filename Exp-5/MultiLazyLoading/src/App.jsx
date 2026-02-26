import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));
const Settings = lazy(() => import("./components/Settings.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">

        <h1>Route Based Lazy Loading</h1>

        <nav className="nav">
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        <Routes>

          <Route
            path="/"
            element={
              <Suspense fallback={<div className="loader">Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route
            path="/profile"
            element={
              <Suspense fallback={<div className="loader">Loading Profile...</div>}>
                <Profile />
              </Suspense>
            }
          />

          <Route
            path="/settings"
            element={
              <Suspense fallback={<div className="loader">Loading Settings...</div>}>
                <Settings />
              </Suspense>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;