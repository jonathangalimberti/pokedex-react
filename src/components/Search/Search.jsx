import react from "react"
import { Options } from "../Options/Options";

function Search({pokemonNames}){
    const [searchedPokemons,setSearchedPokemons] = react.useState([])
    const [search, setSearch] = react.useState("");


    // if (search.length > 0){
        return(
            <>
            {/* <input
                type="search"
                name=""
                id=""
                classNameName="rounded px-2 py-1"
                placeholder="Charmander"
                /> */}
                <label for="searchPokemon" className="form-label">Search Pokemon</label>
                <input className="form-control" list="Pokemons" id="searchPokemon" placeholder="Charmander"
                    value={search}
                 onChange ={(e) => {setSearch(e.target.value)
                    const result = pokemonNames.filter((poke)=> poke.name.toLowerCase().includes(search.toLowerCase()))
                setSearchedPokemons(result)
                }}
                />
                <Options 
                searchedPokemons = {searchedPokemons}
                />
            {/* <datalist className="form-select" size="1" aria-label="Size 3 select example">
                <option selected value="Open this select menu">Open this select menu</option>
                {searchedPokemons.map((poke)=>
                <option key={poke.name} value={poke.name}>{poke.name}</option>
                )}
            </datalist> */}
            </>
        )
    // }else {
        // return(
        //     <>
        //     <input
        //         type="search"
        //         value={search}
        //         name=""
        //         id=""
        //         classNameName="rounded px-2 py-1"
        //         placeholder="Charmander"
        //         onChange={(e) => {setSearch(e.target.value)
        //             const result = pokemonNames.filter((poke)=> poke.name.toLowerCase().includes(search.toLowerCase()))
        //         setSearchedPokemons(result)
        //         }}
        //         >
        //         </input>
        //     <datalist className="form-select" size="3" aria-label="Size 3 select example">
        //         <option selected value="Open this select menu">Open this select menu</option>
        //         {pokemonNames.map((poke)=>
        //         <option key={poke.name} value={poke.name}>{poke.name}</option>
        //         )}
        //     </datalist>
        //     </>
        // )
    // }
}

export {Search}