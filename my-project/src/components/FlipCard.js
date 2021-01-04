import React, { useEffect, useState } from "react";
/* import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap'; */
import BackCard from "./BackCard";


const FlipCard = ({id, setSelected}) => {
  const [character, setCharacter] = useState({});
 

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();

    console.log(data);
    setCharacter(data);

    console.log(character, "DATA");
  };
  return (
    <div>
     { character && <div>
      <h1> { character.name} </h1>
      <div>
                <img
                  src={character.image}
                  alt="Avatar"
                  width="300"
                  height="300"
                  className="imageCard"
                  />
                  </div>
                <div>{character.species}</div>
                <div>{character.status}</div>
               {/*  <button>closed</button> */}
                </div>}
      <button onClick={()=>  setSelected( )}>back</button>
      
    </div>
  );
};

export default FlipCard;

