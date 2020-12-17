import React, {useState} from "react";


const Card = ({item}) => {
    const [isShown, setIsShown] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
        console.log('clicked')
    };


  return (
    <div >
      <div style= {style} className="flip-card" >
        <div style= {myStyle} className="flip-card-inner">
          <div style= {bothStyle}  className="flip-card-front">
            <img  style= {overStyle} src={item.image} alt="Avatar"
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)} />
          </div>

          {isShown && (
            <div style= {bothStyle}  className="flip-card-back">
            <h1>{item.name}</h1>
            <button onClick= {handleClick}>Learn more</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};


 const style = {
    backgroundColor: 'transparent',
    width: '300px',
    height: '200px',
    border: '1px solid #f1f1f1',
    perspective: '1000px',
   /*  transform: 'rotateY(120deg)', */
};


const myStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s',
    transformStyle:' preserve-3d'
} 

const bothStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
 /*  -webkit-backface-visibility: hidden;  */
  backfaceVisibility: 'hidden',
  backgroundColor: '#bbb',
  color: 'black'
 
}

const overStyle = {
  transform: 'rotateY(180deg)',
 
}

export default Card;





/* const hoverStyle = {
 backfaceVisibility: 'hidden'
hover:
    transform: 'rotateY(180deg)',
    transform: '[{ rotate: 90deg}]',
  } */




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