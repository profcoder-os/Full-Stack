import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enrolled from "./pages/Enrolled";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function BackButtonBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide Back button on landing page (Home)
  if (location.pathname === "/") return null;

  return (
    <div className="container backbar">
      <button className="back-btn-page" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
}

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <BackButtonBar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/courses"
            element={
              <Courses
                enrolledCourses={enrolledCourses}
                setEnrolledCourses={setEnrolledCourses}
              />
            }
          />

          <Route
            path="/enrolled"
            element={
              <Enrolled
                enrolledCourses={enrolledCourses}
                setEnrolledCourses={setEnrolledCourses}
              />
            }
          />

          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} StudentPortal | Frontend Only
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;