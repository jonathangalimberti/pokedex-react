import react from "react";

function Options({searchedPokemons}){
    
    const shortList = searchedPokemons.slice(0,5)
    
    if (searchedPokemons.length >= 5 ){
        console.log(shortList);
    }

        return(

            <datalist id="Pokemons">
                {shortList.map((poke)=>
                    (<option key={poke.name} value={poke.name}/>))
                              }
                              
            </datalist>
        )
       
    
}

export {Options}