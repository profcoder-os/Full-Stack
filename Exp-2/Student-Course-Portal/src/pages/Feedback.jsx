import { useState } from "react";
import { TextField, Button, Rating } from "@mui/material";

function Feedback() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully! (UI only)");
    setName("");
    setCourse("");
    setMessage("");
    setRating(3);
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">Feedback</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6">
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <TextField
            fullWidth
            label="Course Name"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Feedback Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <p className="mb-1 fw-semibold">Rating</p>
          <Rating value={rating} onChange={(e, val) => setRating(val)} />
        </div>

        <div className="col-12">
          <Button type="submit" variant="contained">
            Submit Feedback
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;