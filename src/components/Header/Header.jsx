import logo from "../img/pokemon-logo.png";
import "./header.css";
import {Search} from "../Search/Search" 

function Header({ pokemonNames}) {

  return (
    <header className="container-fluid d-flex flex-column  p-0 mx-md-2 justify-content-around align-items-center gap-2">
      <img src={logo} alt="Pokemon" className="w-md-25 w-50" />
      <div className="search-pokemon">
        <Search
        pokemonNames = {pokemonNames}>

        </Search>
        <button className="btn btn-primary">Search Pokemon</button>
      </div>
    </header>
  );
}

export { Header };
