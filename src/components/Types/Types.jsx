function Types({ types }) {
  return (
    <>
      {types.map((type) => (
        <p className="card-text">{type.type.name}</p>
      ))}
    </>
  );
}

export { Types };
