import { useEffect, useState } from "react";
import "./Card.css";

const PokemonCard = ({ name: pokemonName, url }) => {
  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`;
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {

    if(showDetails){

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((pokemonInformation) => {
        console.log(pokemonDetails)

        setLoading(false);
        setPokemonDetails(pokemonInformation)
      })
      .catch((err) => {
        console.log("error loading details ", err);
        setLoading(false);
      });

      }
  }, [showDetails,url]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <h2>{pokemonName}</h2>
      <i
        onClick={toggleDetails}
        className="fa-solid fa-caret-down "
      ></i>
      <img src={imageUrl} alt={pokemonName} />
      {isLoading && <h5>Loading details....</h5>}
      {showDetails && pokemonDetails &&(
        <div className="details-section">
          <h2>Details :</h2>
          {pokemonDetails.abilities.map((ability)=>{
            return <li key={ability}>{ability.ability.name}</li>
          })}
          
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
 