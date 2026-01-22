import ClassCard from "./components/ClassCard";

function App() {
  const classes = [
    {
      title: "DSA",
      desc: "Learn arrays, stacks, queues, trees, graphs and dynamic programming.",
    },
    {
      title: "DBMS",
      desc: "Learn SQL, normalization, transactions, indexing and database design.",
    },
    {
      title: "OS",
      desc: "Learn process scheduling, memory management, deadlocks and file systems.",
    },
    {
      title: "Data Science",
      desc: "Learn EDA, visualization, machine learning basics and real projects.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-2">Class Sections</h2>
      <p className="text-muted text-center mb-4">
        Select a subject to explore topics and resources.
      </p>

      <div className="row g-4">
        {classes.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <ClassCard title={item.title} desc={item.desc} buttonText="Open" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;