import "./Home.css";

function About() {
  return (
    <div className="home-container">
      <div className="card">
        <h2>ABOUT ME</h2>

        <p>
          I am a Computer Science student passionate about Full Stack
          Development, Machine Learning, and Problem Solving.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>MERN Stack</li>
          <li>Machine Learning</li>
          <li>Data Structures & Algorithms</li>
          <li>SQL & DBMS</li>
        </ul>

        <h3>Information</h3>
        <p>Email: example@example.com</p>
        <p>Location: India</p>
      </div>
    </div>
  );
}

export default About;