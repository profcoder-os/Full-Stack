import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Home() {
  return (
    <div className="container py-5">
      <div className="hero-company">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <p className="hero-chip">Student Portal Web Application</p>

            <h1 className="hero-heading">
              Build Skills with a <span>Modern</span> Learning Platform
            </h1>

            <p className="hero-text">
              Browse high-quality courses, enroll instantly, track your learning,
              and share feedback with a clean and responsive student dashboard.
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap">
              <Link to="/courses">
                <Button variant="contained" size="large">
                  Browse Courses
                </Button>
              </Link>

              <Link to="/enrolled">
                <Button variant="outlined" size="large">
                  View Enrollments
                </Button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="company-card">
              <h5 className="fw-bold mb-3">Portal Highlights</h5>

              <div className="kpi-grid">
                <div className="kpi-box">
                  <h3>Fast</h3>
                  <p>Single Page App</p>
                </div>

                <div className="kpi-box">
                  <h3>Simple</h3>
                  <p>Easy Navigation</p>
                </div>

                <div className="kpi-box">
                  <h3>Modern</h3>
                  <p>Responsive UI</p>
                </div>

                <div className="kpi-box">
                  <h3>Clean</h3>
                  <p>Bootstrap + MUI</p>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-muted mb-2 fw-semibold">Quick Actions</p>

                <div className="d-flex gap-2 flex-wrap">
                  <Link to="/feedback" className="btn btn-outline-primary btn-sm">
                    Submit Feedback
                  </Link>

                  <Link to="/register" className="btn btn-primary btn-sm">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="feature-card">
                <h6 className="fw-bold">Course Library</h6>
                <p className="text-muted mb-0">
                  Explore multiple academic and technical courses.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="feature-card">
                <h6 className="fw-bold">Instant Enrollment</h6>
                <p className="text-muted mb-0">
                  Enroll with one click and manage your courses anytime.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="feature-card">
                <h6 className="fw-bold">Feedback System</h6>
                <p className="text-muted mb-0">
                  Provide ratings and feedback for course improvements.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;