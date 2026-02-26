import React, { useState } from "react";
import "./Form.css";

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    dob: "",
    state: "",
    skills: []
  });

  const states = ["Haryana", "Punjab", "Delhi", "UP", "Rajasthan"];
  const skillsList = ["HTML", "CSS", "JavaScript", "React"];

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(skill => skill !== value)
      });
    }
  };

  // ✅ Age Calculation Function
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const todayDate = new Date();

    let age = todayDate.getFullYear() - birthDate.getFullYear();

    const monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = calculateAge(formData.dob);

    const message = `
========= User Details =========

First Name : ${formData.firstName}
Last Name  : ${formData.lastName}
Gender     : ${formData.gender}
Address    : ${formData.address}
DOB        : ${formData.dob}
Age        : ${age} years
State      : ${formData.state}
Skills     : ${formData.skills.join(", ")}

================================
    `;

    alert(message);
  };

  return (
    <div className="container">
      <div className="card">

        <h2>User Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleChange} required />

          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} required />

          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>
          </div>

          <label>Address</label>
          <textarea name="address" onChange={handleChange} required />

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            max={today}
            onChange={handleChange}
            required
          />

          <label>State</label>
          <select name="state" onChange={handleChange} required>
            <option value="">Select State</option>
            {states.map((st, i) => (
              <option key={i} value={st}>{st}</option>
            ))}
          </select>

          <label>Skills</label>
          <div className="checkbox-group">
            {skillsList.map((skill, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  value={skill}
                  onChange={handleCheckbox}
                />
                {skill}
              </label>
            ))}
          </div>

          <button type="submit">Submit</button>

        </form>

      </div>
    </div>
  );
};

export default Form;