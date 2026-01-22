import { TextField, Button } from "@mui/material";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful! (UI only)");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="fw-bold mb-3 text-center">Login</h2>

      <form className="d-flex flex-column gap-3" onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;