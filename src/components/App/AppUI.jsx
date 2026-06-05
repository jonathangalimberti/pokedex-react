import react from "react";
import { Header } from "../Header/Header";
import { Context } from "../Context/Context";
import { Pagination } from "../Pagination/Pagination";
import { Item } from "../Item/Item";

function AppUI() {
  const { nextPage, previousPage, pokemonDetail } = react.useContext(Context);

  return (
    <react.Fragment>
      <Header />
      <Pagination
        onNextPage={nextPage}
        onPreviousPage={previousPage}
      ></Pagination>
      <Item key="items" pokemon={pokemonDetail}></Item>
    </react.Fragment>
  );
}

export { AppUI };
