import React from "react";
import '../Card.css'

const Card = ({ item }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
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
          <button onClick={handleClick}>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
