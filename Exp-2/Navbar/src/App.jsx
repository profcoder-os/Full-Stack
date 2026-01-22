import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="p-4 bg-light rounded shadow-sm">
          <h2 className="fw-bold">Welcome to My Website</h2>
          <p className="text-muted mt-2">
            This is a Bootstrap Navbar implemented in React.  
            Use the navigation links above to explore different sections of the page.
          </p>

          <button className="btn btn-primary mt-2">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default App;