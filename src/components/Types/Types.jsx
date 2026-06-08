function Types({ types }) {
  return (
    <>
      {types.map((type) => (
        <p className="card-text" key={type.type.name} >{type.type.name}</p>
      ))}
    </>
  );
}

export { Types };
