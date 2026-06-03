import "./item.css"
import react from "react";

function Item ({pokemon}) {
  
  if (!pokemon.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {pokemon.map((poke) => (
        <div key={poke.id} className="container">
          <img
            src={poke.sprites.front_default}
            alt={poke.name}
          />
          <p>{poke.name}</p>
          <p>{poke.id}</p>
        </div>
      ))}
    </>
  );
  
   
}

export {Item}