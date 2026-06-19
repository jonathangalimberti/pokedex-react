import react from "react";
import { Options } from "../Options/Options";

function Search({ pokemonNames }) {
  const [searchedPokemons, setSearchedPokemons] = react.useState([]);
  const [searchText, setSearchText] = react.useState("");
  return (
    <>
      <label htmlFor="searchPokemon" className="form-label">
        Search Pokemon
      </label>
      <input
        className="form-control"
        list="Pokemons"
        id="searchPokemon"
        placeholder="Charmander"
        autoComplete="off"
        onChange={(e) => {
          const result = pokemonNames.filter((poke) =>
            poke.name.toLowerCase().includes(e.target.value.toLowerCase()),
          );
          setSearchedPokemons(result);
          setSearchText(e.target.value.toLowerCase());
        }}
      />
      <Options searchedPokemons={searchedPokemons} search={searchText} />
    </>
  );
}

export { Search };
