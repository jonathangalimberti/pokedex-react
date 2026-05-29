import react from 'react';
import Header from '../Header/Header';
import {Context} from '../Context/Context';
import { Button } from "../Button/Button";

function AppUI () {
     const {GetPokemon} = react.useContext(Context);
    GetPokemon();
     return (
        <react.Fragment>
             <Header/>
             <Button></Button>
        </react.Fragment>
  );
}

export {AppUI};