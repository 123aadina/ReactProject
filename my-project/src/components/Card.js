import React from "react";


const Card = ({item}) => {
    

  const handleClick = (e) => {
    e.preventDefault();
        console.log('clicked')
    };


  return (
      <div style= {style} className="flip-card" >
        <div style= {myStyle} className="flip-card-inner">
          <div style= {bothStyle}  className="flip-card-front">
            <img  style= {overStyle}  src={item.image} alt="Avatar"  width="200" height="200" className='imageCard'
             />
          </div>

            <div style= {bothStyle}  className="flip-card-back">
            <h1>{item.name}</h1>
            <button onClick= {handleClick}>Learn more</button>
          </div>
        
        </div>
      </div>
    
  );
};

//flip-card
 const style = {
    backgroundColor: 'transparent',
    width: '200px',
    height: '200px',
    border: '2px solid red',
    perspective: '1000px',
   
};

//flip-card-inner
const myStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s',
    transformStyle:' preserve-3d'
};

//flip-card-front
const bothStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  webkitBackfacevisibility: 'hidden',
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
  }
  
  
   onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}*/




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