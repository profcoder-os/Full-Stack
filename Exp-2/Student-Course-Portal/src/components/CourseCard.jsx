import { Card, CardContent, Typography, Button, Chip } from "@mui/material";

function CourseCard({ course, onEnroll, isEnrolled }) {
  return (
    <Card className="course-card-pro">
      <CardContent>
        <div className="course-top">
          <span className="course-pill">{course.level}</span>
          <span className="course-price">{course.price}</span>
        </div>

        <Typography variant="h6" fontWeight="900" sx={{ mt: 1 }}>
          {course.title}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }} className="course-desc">
          {course.desc}
        </Typography>

        <div className="course-meta mt-3">
          <span>👨‍🏫 {course.instructor}</span>
          <span>⏳ {course.duration}</span>
        </div>

        <div className="d-flex gap-2 mt-3 flex-wrap">
          {course.tags.map((tag, idx) => (
            <Chip key={idx} label={tag} size="small" variant="outlined" />
          ))}
        </div>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, borderRadius: "12px", fontWeight: "700" }}
          disabled={isEnrolled}
          onClick={() => onEnroll(course)}
        >
          {isEnrolled ? "Enrolled ✅" : "Enroll Now"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default CourseCard;