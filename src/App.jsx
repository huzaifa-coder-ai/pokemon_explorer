import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [pokemonList, setpokemonList] = useState([]);
 

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((res) => res.json())
        .then((data) => setpokemonList(data.results))
        .catch((error) => console.log("Error occured :", error));
    }, []);




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
