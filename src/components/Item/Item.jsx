import pokeball from "../img/pokeball.png";
import "./item.css";
import { Loading } from "../Loading/Loading";
import { Card } from "../Card/Card";

function Item({ pokemon, page }) {
  if (!pokemon.length) {
    return <Loading key={page} pokemon={pokemon} pokeball={pokeball} />;
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
