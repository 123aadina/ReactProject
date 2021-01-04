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
                <button>closed</button>
                </div>}
      <button onClick={()=>  setSelected( )}>back</button>
      
    </div>
  );
};

export default FlipCard;



/* return <BackCard item={item} key={item._id} */

  {/*  <BackCard /> */}



/**
 * import React, {useState} from "react";
/* import { Link } from "react-router-dom"; */
/* import BackCard from "./BackCard"; */

/* 
const Card = ({ item }) => { */
  /* const [character, setCharacter] = useState({}); */
  /* const [isClick, setIsClick] = useState(false); */

 /*  const handleClick = (e) => {
    console.log('object', item.name)
    setCharacter(item.name)

  }; */

 /*  const clicked = () => {
    /* setClick((prev) => !prev) */
   /* alert(`hi, ${item.name}, ${item.image}, ${item.species},${item.status}`)
    alert(` <div>
    <h1>${item.name}</h1>
       <div>
       <img
         src=${item.image}
         alt="Avatar"
         width="300"
         height="300"
         className="imageCard"
         />
         </div>,
       <div>${item.species}</div>,
       <div>${item.status}</div>,
       <button>closed</button>
      </div>`) 
      };*/

 /*  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={item.image}
            alt="Avatar"
            width="200"
            height="200"
            className="imageCard"
          />
        </div>
        <div className="flip-card-back">
          <h1>{item.name}</h1>
          <button onClick={() => setIsClick(true)}>
            Learn more
          </button>
          <BackCard isOpen={isClick}>
            hello
          </BackCard>
        </div>
      </div>
    </div>
  );
};

export default Card; */

