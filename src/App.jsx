import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [pokemonList, setpokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
      .then((res) => res.json())
      .then((data) => {
        setpokemonList(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error occured :", error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
  <>
  
  <h1>Pokemon Explorer</h1>
  <div>

      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        );
      })
    }
  </div>
</>
  )

}


export default App;
