import React, {useState} from "react";
import { Link } from "react-router-dom";
import BackCard from "./BackCard";
/* import {Alert} from 'react-bootstrap' */
/* import { Prev } from "react-bootstrap/esm/PageItem"; */


const Card = ({ item , setSelected}) => {


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
          <button onClick={() => setSelected(item)}>
         
         Learn more
         </button>
        </div>
      </div>
    </div>
  );
};

export default Card;





 {/* <Link
                    className="text-decoration-none text-darker justify-content-center text-dark"
                    to={{
                      pathname: "/backCard",
                      state: {
                        item: item,
                      },
                    }}
                  >
                    {item.name}
                    Learn more
              </Link> */}
         {/*  <button onClick={}>
            Learn more
          </button> */}
         {/*  <Alert isOpen={visible} toggle={toggle}>Hi </Alert> */}




         /*  const [visible, setVisible] = useState(false); */
/*   const [isClick, setIsClick] = useState(false); */

 /*  const handleClick = (e) => {
    console.log('object', item.name)
    setCharacter(item.name)

  }; */

 /*  const isClicked = () => {
     setClick((prev) => !prev) 
    alert(`Hi ${item.name}\n Species: ${item.species}\n Status: ${item.status}`)
      }; */

   /*  const toggle= () => {
        setVisible((Prev) => !Prev)
      } */






 