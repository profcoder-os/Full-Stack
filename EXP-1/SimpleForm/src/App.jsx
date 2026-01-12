import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [submittedList, setSubmittedList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedList([
      ...submittedList,
      { name, email, age }
    ]);

    setName("");
    setEmail("");
    setAge("");
  };

  const handleDelete = (index) => {
    const updatedList = submittedList.filter((_, i) => i !== index);
    setSubmittedList(updatedList);
  };

  return (
    <div className="container">
      <h2>Simple Form SPA</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* TABLE FOR SUBMITTED DATA */}
      {submittedList.length > 0 && (
        <div className="output">
          <h3>Submitted Data</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {submittedList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
    </div>
  );
}

export default App;