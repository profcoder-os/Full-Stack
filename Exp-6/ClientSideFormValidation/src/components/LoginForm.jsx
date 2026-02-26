import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });


  // Email validation using string logic
  const validateEmail = (email) => {

    if (!email) return "Email is required";

    const atIndex = email.indexOf("@");

    if (atIndex === -1) return "Invalid Email";

    const username = email.substring(0, atIndex);

    // Only letters and numbers allowed before @
    for (let i = 0; i < username.length; i++) {
      const ch = username[i];

      const isLetter =
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z");

      const isNumber =
        (ch >= "0" && ch <= "9");

      if (!isLetter && !isNumber) {
        return "Invalid Email";
      }
    }

    const domain = email.substring(atIndex + 1);

    if (!domain.includes(".")) return "Invalid Email";

    return "";
  };


  // Password validation
  const validatePassword = (password) => {

    if (!password) return "Password is required";

    const passwordRegex =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    if (!passwordRegex.test(password)) {
      return "Password must start with Capital, contain number, special char, min 5 chars";
    }

    return "";
  };


  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    // Real-time validation
    let newErrors = { ...errors };

    if (name === "email") {
      newErrors.email = validateEmail(value);
    }

    if (name === "password") {
      newErrors.password = validatePassword(value);
    }

    setErrors(newErrors);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const passError = validatePassword(form.password);

    setErrors({
      email: emailError,
      password: passError
    });

    if (!emailError && !passError) {
      alert("Login Successful ✅");
    }
  };


  return (
    <div className="container">
      <div className="card">

        <h2>Login Form</h2>

        <form onSubmit={handleSubmit}>

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}


          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}


          <button type="submit">Submit</button>

        </form>

      </div>
    </div>
  );
};

export default LoginForm;