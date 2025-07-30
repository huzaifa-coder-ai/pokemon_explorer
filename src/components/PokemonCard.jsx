// import {  } from "react";
import { useEffect, useState } from "react";
import "./Card.css";

const PokemonCard = ({ name: pokemonName, url }) => {
  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`;
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState();
  console.log("[test] url ", url);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("[test] response ", res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("[test] error loading details ", err);
        setLoading(false);
      });
  }, [url]);

  const showInfo = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <h2>{pokemonName}</h2>
      <i
        onClick={showInfo}
        className={`fa-solid fa-caret-down ${showDetails ? `up` : `down`} `}
      ></i>
      <img src={imageUrl} alt={pokemonName} />
      {isLoading && <h1>Loading details</h1>}
      {showDetails && (
        <div className="details-section">
          <p>Abilities :-</p>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
