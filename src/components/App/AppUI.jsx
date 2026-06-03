import react from 'react';
import {Header} from '../Header/Header';
import {Context} from '../Context/Context';
import { Button } from "../Button/Button";
import {Item} from "../Item/Item"

function AppUI () {
     const {pokemon,
          nextPage,
          previousPage,
          pokemonDetail} = react.useContext(Context);
    
     return (
        <react.Fragment>
             <Header/>
             <Item 
             key={pokemonDetail.id}
             pokemon={pokemonDetail}
             ></Item>
             <Button
             onNextPage={nextPage}
             onPreviousPage={previousPage}
             ></Button>
        </react.Fragment>
  );
}

export {AppUI};