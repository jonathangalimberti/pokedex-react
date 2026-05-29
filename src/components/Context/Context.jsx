import react from 'react';
import {useState} from "react";
import {useEffect} from "react";

const Context = react.createContext();

function PokemonProvider ({children}){
    
    const [page, setPage] = useState(0)
    
    function GetPokemon () {
        const [pokemon, setPokemon] = useState([]);

        async function fetchPokemon () {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page*20}`);
            const data = await response.json();
            setPokemon(data.results);
            console.log(data.results);  
        }
        useEffect(() => {
            fetchPokemon();
        }, [page]);
    }

    function nextPage (){
        setPage(page + 1)
    }

    function previousPage (){
        if(page > 0){
            setPage(page - 1)
        }
    }



    return (
        <Context.Provider value={{
            GetPokemon,
            nextPage,
            previousPage
        }}>
            {children}
        </Context.Provider>
    )
}

export {PokemonProvider, Context};