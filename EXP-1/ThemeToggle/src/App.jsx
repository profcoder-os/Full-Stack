import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-container" : "light-container"}>
      <h1>Theme Toggle SPA</h1>

      <p>
        Current Theme: <b>{darkMode ? "Dark Mode" : "Light Mode"}</b>
      </p>

      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;