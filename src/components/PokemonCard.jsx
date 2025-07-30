// import {  } from "react";
import { useEffect, useState } from "react";
import "./Card.css";

const PokemonCard = (props) => {
  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${props.name}.png`;
  const [details, setdetails] = useState(false)
  
  const showInfo = () =>{
    setdetails(!details)
  }

    

 
  

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <i 
      onClick={showInfo}
      className={`fa-solid fa-caret-down ${details ? `up` : `down`} `}></i>
      <img src={imageUrl} alt={props.name} />
      {details && (
        <div className="details-section">
            <p>Abilities :-</p>
        </div>
      )}
    </div>
    
); 

}; 

export default PokemonCard;
