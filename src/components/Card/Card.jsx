import { Carrousel } from "../Carrousel/Carrousel";
import { Types } from "../Types/Types";

function Card({ poke }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Carrousel
        front={poke.sprites.front_default}
        back={poke.sprites.back_default}
        name={poke.name}
      />

      <div className="card-body">
        <p>{poke.name}</p>
        <Types types={poke.types} />
      </div>
    </div>
  );
}

export { Card };
