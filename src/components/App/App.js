import react from "react";
import { AppUI } from "../App/AppUI";
import "./App.css";
import { PokemonProvider } from "../Context/Context";

function App() {
  return (
    <PokemonProvider>
      <AppUI />
    </PokemonProvider>
  );
}

export default App;
