import React, {useState} from "react";
import  Container from 'react-bootstrap/Container';



const Card = ({item}) => {
    const [isShown, setIsShown] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
        console.log('clicked')
    };


  return (
    <div>
      <div className="flip-card" >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={item.image} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1>
            <button onClick= {handleClick}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* const style = {
    backgroundColor: 'transparent',
    width: '300px',
    height: '200px',
    border: '1px solid #f1f1f1',
    perspective: '1000px',
};


const myStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s',
    transformStyle:' preserve-3d'
} */



/* const hoverStyle = {

hover:
    transform: 'rotateY(180deg)',
  } */
export default Card;



/* 
<div style = {style}>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={item.image} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1>{item.name}</h1>
      <button onClick= {handleClick}>Learn more</button>
    </div>
  </div>
</div>
</div> */