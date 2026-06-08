import { useState } from "react";
import logo from "../img/pokemon-logo.png";
import "./header.css";
import {Search} from "../Search/Search" 
import {setSearchedPokemons} from "../Search/Search"

function Header({pokemonDetail, pokemonNames, setSearchedPokemons}) {
  // const [search, setSearch] = useState("");

  return (
    <header className="container-fluid d-flex flex-column  p-0 mx-md-2 justify-content-around align-items-center gap-2">
      <img src={logo} alt="Pokemon" className="w-md-25 w-50" />
      <div className="search-pokemon">
        <Search
        pokemonNames = {pokemonNames}>

        </Search>
        {/* <input
          type="search"
          value={search}
          
          name=""
          id=""
          className="rounded px-2 py-1"
          placeholder="Charmander"
          onChange={(e) => {setSearch(e.target.value)
            const result = pokemonNames.filter((poke)=> poke.name.toLowerCase().includes(search.toLowerCase()))
          }}
        /> */}
        <button className="btn btn-primary">Search Pokemon</button>
      </div>
    </header>
  );
}

export { Header };
