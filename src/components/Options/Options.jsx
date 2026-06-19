function Options({ searchedPokemons, search }) {
  const exactMatch = searchedPokemons.some(
    (pokemon) => pokemon.name.toLowerCase() === search.toLowerCase(),
  );

  if (exactMatch) {
    return null;
  }

  if (searchedPokemons.length >= 5) {
    return (
      <datalist id="Pokemons">
        {searchedPokemons.slice(0, 5).map((poke) => (
          <option key={poke.name} value={poke.name} />
        ))}
      </datalist>
    );
  } else if (searchedPokemons.length < 5) {
    return (
      <datalist id="Pokemons">
        {searchedPokemons.map((poke) => (
          <option key={poke.name} value={poke.name} />
        ))}
      </datalist>
    );
  } else {
  }
}

export { Options };
