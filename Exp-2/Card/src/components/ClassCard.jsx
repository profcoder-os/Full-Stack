function ClassCard({ title, desc, buttonText }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{desc}</p>

        <div className="mt-auto">
          <button className="btn btn-primary btn-sm w-100">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;