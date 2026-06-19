function Loading({ page, pokeball }) {
  return (
    <div
      key={page}
      className="container d-flex justify-content-center align-items-center gap-3"
      style={{ height: "50vh" }}
    >
      <img
        src={pokeball}
        id="pokeball-loading"
        className=""
        alt="pokeball-loading"
      />
      <h2 className="fw-bolder">Loading...</h2>
    </div>
  );
}

export { Loading };
