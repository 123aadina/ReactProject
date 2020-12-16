import React from "react";

const Card = ({item}) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
