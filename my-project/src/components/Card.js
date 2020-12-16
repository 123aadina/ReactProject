import React from "react";

const Card = ({item}) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={item.image} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
