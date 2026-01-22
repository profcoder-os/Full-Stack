import { Card, CardContent, Typography, Button } from "@mui/material";

function Enrolled({ enrolledCourses, setEnrolledCourses }) {
  const handleDisenroll = (id) => {
    const updated = enrolledCourses.filter((c) => c.id !== id);
    setEnrolledCourses(updated);
  };

  return (
    <div className="container py-4">
      <div className="page-header">
        <h2 className="page-title">My Enrolled Courses</h2>
        <p className="page-subtitle">
          View your enrolled courses and remove anytime.
        </p>
      </div>

      {enrolledCourses.length === 0 ? (
        <div className="empty-state">
          <h5>No Enrollments Found</h5>
          <p className="text-muted mb-0">
            Enroll in courses from the Courses section.
          </p>
        </div>
      ) : (
        <div className="row g-3">
          {enrolledCourses.map((course) => (
            <div className="col-12 col-md-6 col-lg-4" key={course.id}>
              <Card className="shadow-sm">
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {course.title}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Instructor: {course.instructor}
                  </Typography>

                  <Typography variant="body2">
                    Duration: {course.duration}
                  </Typography>

                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => handleDisenroll(course.id)}
                  >
                    Disenroll
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Enrolled;