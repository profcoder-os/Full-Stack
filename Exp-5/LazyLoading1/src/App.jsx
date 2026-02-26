import React, { Suspense, lazy } from "react";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard.jsx"));

const App = () => {
  return (
    <div className="app">
      <h1>Lazy Loading</h1>

      <Suspense fallback={<div className="loader">Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default App;