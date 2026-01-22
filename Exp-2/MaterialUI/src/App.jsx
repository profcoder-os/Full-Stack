import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Divider,
} from "@mui/material";

function App() {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [complaint, setComplaint] = useState("");

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      id: Date.now(),
      studentId,
      name,
      complaint,
    };

    setRecords([newRecord, ...records]);

    setStudentId("");
    setName("");
    setComplaint("");
  };

  const handleDelete = (id) => {
    setRecords(records.filter((rec) => rec.id !== id));
  };

  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      {/* Form Card */}
      <Card className="shadow-sm">
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Complaint Record Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Student ID"
              fullWidth
              margin="normal"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />

            <TextField
              label="Student Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <TextField
              label="Complaint"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Save Complaint
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Stored Records */}
      <Card className="shadow-sm mt-4">
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            Stored Complaints ({records.length})
          </Typography>

          <Divider sx={{ my: 2 }} />

          {records.length === 0 ? (
            <Typography color="text.secondary">
              No complaints stored yet.
            </Typography>
          ) : (
            <Stack spacing={2}>
              {records.map((rec) => (
                <Card key={rec.id} variant="outlined">
                  <CardContent>
                    <Typography variant="body1">
                      <b>ID:</b> {rec.studentId}
                    </Typography>

                    <Typography variant="body1">
                      <b>Name:</b> {rec.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      <b>Complaint:</b> {rec.complaint}
                    </Typography>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ mt: 2 }}
                      onClick={() => handleDelete(rec.id)}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;