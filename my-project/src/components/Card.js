import React, {useState} from "react";
/* import { Link } from "react-router-dom"; */
import BackCard from "./BackCard";


const Card = ({ item }) => {
  /* const [character, setCharacter] = useState({}); */
/*   const [isClick, setIsClick] = useState(false); */

 /*  const handleClick = (e) => {
    console.log('object', item.name)
    setCharacter(item.name)

  }; */

  const isClicked = () => {
    /* setClick((prev) => !prev) */
    alert(`Hi ${item.name}\n Species: ${item.species}\n Status: ${item.status}`)
      };

  return (
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
          <button onClick={isClicked}>
            Learn more
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Card;








 