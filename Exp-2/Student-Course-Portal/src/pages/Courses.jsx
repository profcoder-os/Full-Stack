import CourseCard from "../components/CourseCard";
import { coursesData } from "../data/courses";

function Courses({ enrolledCourses, setEnrolledCourses }) {
  const handleEnroll = (course) => {
    const alreadyEnrolled = enrolledCourses.some((c) => c.id === course.id);

    if (alreadyEnrolled) {
      alert("You are already enrolled in this course.");
      return;
    }

    setEnrolledCourses([...enrolledCourses, course]);
    alert("Successfully enrolled in the course!");
  };

  return (
    <div className="container py-4">
      {/* Page Header */}
      <div className="page-header">
        <h2 className="page-title">Browse Courses</h2>
        <p className="page-subtitle">
          Discover curated courses designed for skill-building and academic
          success.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="row g-4">
        {coursesData.map((course) => (
          <div className="col-12 col-md-6 col-lg-4" key={course.id}>
            <CourseCard
              course={course}
              onEnroll={handleEnroll}
              isEnrolled={enrolledCourses.some((c) => c.id === course.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;