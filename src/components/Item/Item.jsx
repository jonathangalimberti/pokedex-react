import pokeball from "../img/pokeball.png";
import "./item.css";
import { Loading } from "../Loading/Loading";
import { Card } from "../Card/Card";
import { Carrousel } from "../Carrousel/Carrousel";
import { Types } from "../Types/Types";

function Item({ pokemon, page }) {
  if (!pokemon.length) {
    return <Loading page={page} pokemon={pokemon} pokeball={pokeball} />;
  }

  return (
    <>
      <div
        key={page}
        className="container d-flex flex-wrap justify-content-center gap-2"
      >
        {pokemon.map((poke) => (
          <Card key={poke.id} poke={poke} />
        ))}
      </div>
    </>
  );
}

export { Item };
