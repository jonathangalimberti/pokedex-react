import react from "react";

//creacion de contexto para evitar prop drilling
const Context = react.createContext();

//funcion provider para envolver la app y proveer el contexto a los componentes hijos
function PokemonProvider({ children }) {
  //constantes y estados con sus actualizadores
  const url = "https://pokeapi.co/api/v2/";
  const [page, setPage] = react.useState(1);
  const [pokemonDetail, setPokemonDetail] = react.useState([]);
  let pokemonNames = [];
  const [fullPokemonList, setFullPokemonList] = react.useState([]);

  //useEffect para controlar la carga de las funciones asincronas
  react.useEffect(() => {
    fetchPokemon();
  }, []);

  react.useEffect(() => {
    console.log(fullPokemonList);
  }, [page]);

  //Funciones asincronas para llamadas a la API
  async function GetPokemonNames() {
    const response = await fetch(`${url}pokemon?limit=100000`);
    const data = await response.json();
    pokemonNames = data.results;
    console.log(pokemonNames);
    data.results.forEach((poke) => {
      fetch(poke.url)
        .then((response) => response.json())
        .then((data) => {
          if (!fullPokemonList.some((p) => p.id === data.id)) {
            setFullPokemonList((prev) => [...prev, data]);
          }
        });
    });
  }

  async function fetchPokemon() {
    const response = await fetch(
      `${url}pokemon?offset=${(page - 1) * 20}&limit=20`,
    );
    const data = await response.json();
    setPokemonDetail([]);
    data.results.forEach((poke) => {
      fetch(poke.url)
        .then((response) => response.json())
        .then((data) => {
          if (!pokemonDetail.some((p) => p.id === data.id)) {
            setPokemonDetail((prev) => [...prev, data]);
          }
        });
    });
  }

  //funciones ejecutables
  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  //renderizado y props del provider
  return (
    <Context.Provider
      value={{
        page,
        nextPage,
        previousPage,
        pokemonDetail,
      }}
    >
      {children}
    </Context.Provider>
  );
}

//exportaciones nombradas
export { PokemonProvider, Context };
