import react from "react";
import { useLocalStorage } from "./LocalStorage";

//creacion de contexto para evitar prop drilling
const Context = react.createContext();

//funcion provider para envolver la app y proveer el contexto a los componentes hijos
function PokemonProvider({ children }) {
  //constantes y estados con sus actualizadores
  const url = "https://pokeapi.co/api/v2/";
  const [page, setPage] = react.useState(1);
  const [cache, setCache] = react.useState({});;
  const [pokemonNames, setPokemonNames] = react.useState([]);

  //useEffect para controlar la carga de las funciones asincronas
  react.useEffect(() => {
    GetPokemonNames()
  }, []);

  react.useEffect(() => {
    console.log(cache);
  }, [cache]);
  
  react.useEffect(() => {
    if(!cache[page]){
      fetchPokemon(page);
      fetchPokemon(page+1);
    }else{
      fetchPokemon(page+1)
    }
  }, [page]);
  
  //Funciones asincronas para llamadas a la API
  async function GetPokemonNames() {
    const response = await fetch(`${url}pokemon?limit=100000`);
    const data = await response.json();
    setPokemonNames(data.results);
  }
  
  async function fetchPokemon(pagination) {
    const response = await fetch(
      `${url}pokemon?offset=${(pagination - 1 ) * 20}&limit=20`,
    );
    const data = await response.json();
    const pokemonData = await Promise.all(data.results.map((poke)=>(fetch(poke.url)
    .then((response) => response.json()))))
    setCache((prev)=>({...prev,[pagination]:pokemonData})) 
  }

  //funciones ejecutables
  function nextPage() {
    if(page !== Math.ceil(pokemonNames.length/20)){
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function otherPage(pagination){
    setPage(pagination)
  }

  //renderizado y props del provider
  return (
    <Context.Provider
      value={{
        page,
        nextPage,
        previousPage,
        pokemonNames,
        cache,
        otherPage
      }}
    >
      {children}
    </Context.Provider>
  );
}

//exportaciones nombradas
export { PokemonProvider, Context };

