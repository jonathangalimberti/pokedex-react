function Carrousel({ front, back, name }) {
  return (
    <div id={name} className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={front} className="d-block w-100" alt={`${name} front`} />
        </div>
        <div className="carousel-item">
          <img src={back} className="d-block w-100" alt={`${name} back`} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${name}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${name}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export { Carrousel };
