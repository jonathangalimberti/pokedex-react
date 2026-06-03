import react from "react";

const Context = react.createContext();

function PokemonProvider({ children }) {
  const url = "https://pokeapi.co/api/v2/";
  const [page, setPage] = react.useState(1);
  const [pokemonDetail, setPokemonDetail] = react.useState([]);
  let pokemonNames = [];

  async function GetPokemonNames (){
    const response = await fetch(`${url}pokemon?limit=100000`);
    const data = await response.json();
    pokemonNames = data.results
    console.log("Esto es pokemonNames ", pokemonNames);
  }

  react.useEffect(()=>{
    GetPokemonNames();
  },[])


  async function fetchPokemon() {
    const response = await fetch(`${url}pokemon?offset=${(page - 1) * 20}&limit=20`);
    const data = await response.json();
    data.results.forEach(poke =>{
        fetch(poke.url)
        .then(response => response.json())
        .then(data => {
            if(!pokemonDetail.some(p => p.id === data.id)){
                setPokemonDetail(prev => [...prev, data]);
            }
        })
    })
  }

react.useEffect(() => {
  fetchPokemon();
}, [page]);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <Context.Provider
      value={{
        
        nextPage,
        previousPage,
        pokemonDetail
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { PokemonProvider, Context };
