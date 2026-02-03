import "./Home.css";
import profileImg from "../assets/D.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="card">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h2 className="name">DHEERAJ KUMAR</h2>
      </div>
    </div>
  );
}

export default Home;