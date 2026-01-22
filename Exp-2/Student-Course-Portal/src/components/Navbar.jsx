import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-pro sticky-top">
      <div className="container nav-horizontal">
        <NavLink className="brand-pro" to="/">
          StudentPortal
        </NavLink>

        <div className="nav-links">
          <NavLink className="nav-link-pro" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link-pro" to="/courses">
            Courses
          </NavLink>

          <NavLink className="nav-link-pro" to="/enrolled">
            Enrolled
          </NavLink>

          <NavLink className="nav-link-pro" to="/feedback">
            Feedback
          </NavLink>

          <NavLink className="nav-btn-pro login-pro" to="/login">
            Login
          </NavLink>

          <NavLink className="nav-btn-pro register-pro" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;