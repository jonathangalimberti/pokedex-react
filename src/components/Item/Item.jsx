import "./item.css"
import react from "react";

function Item ({pokemon}) {
  console.log("Esto es pokemon en Item ", pokemon);
  react.useEffect(()=>{
    console.log("Esto es pokemon en Item con useEffect ", pokemon);
  }, [pokemon])

  pokemon.forEach(pokemon => {
    if(pokemon === undefined){
      return (
              <div className="container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>{pokemon.name}</p>
                <p >{pokemon.id}</p>
              </div>);
      }else {
      return <p>Loading...</p>
      }
  })
   
}

export {Item}