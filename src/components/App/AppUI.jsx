import react from "react";
import { Header } from "../Header/Header";
import { Context } from "../Context/Context";
import { Pagination } from "../Pagination/Pagination";
import { Item } from "../Item/Item";

function AppUI() {
  const { nextPage, previousPage, pokemonNames, page, cache, otherPage} = react.useContext(Context);

  return (
    <react.Fragment>
      <Header 
      pokemonNames={pokemonNames}/>
      <Pagination
       otherPage={otherPage}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
        totalPages = {Math.ceil(pokemonNames.length/20)}
        page = {page}
      />
      <Item key="items" pokemon={cache[page]}></Item>
      <Pagination
        otherPage={otherPage}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
        totalPages = {Math.ceil(pokemonNames.length/20)}
        page = {page}
      />
    </react.Fragment>
  );
}

export { AppUI };
