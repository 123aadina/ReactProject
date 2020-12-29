import React from "react";
import { Link } from "react-router-dom";
/* import FlipCard from "./FlipCard"; */

const Card = ({ item }) => {
 
 /*  const handleClick = (e) => {
    e.preventDefault();
    console.log('hi')
    onClick={handleClick}
  }; */

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
          <button >

         {/*  <Link
                    className="text-decoration-none text-darker justify-content-center text-dark"
                    to={{
                      pathname: "/FlipCard",
                      state: {
                        data: data,
                      },
                    }}
                  >
                    {data.title}
                  </Link> */}
         {/*  <a
            href={<FlipCard />}
            target="_blank"
            className="text-light text-decoration-none"
          >
            Learn more
          </a> */}
            
            
            Learn more
          </button>
          {/*  <h1>{item.name}</h1>
          <div>
            <img
              src={item.image}
              alt="Avatar"
              width="300"
              height="300"
              className="imageCard"
            />
          </div>
          <div>{item.species}</div>
          <div>{item.status}</div>
          <button>closed</button>  */}
          {/* <FlipCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
