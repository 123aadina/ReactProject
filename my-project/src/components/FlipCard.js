import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const FlipCard = ({ item }) => {
   const [data, setData] = useState();


    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character/");
      const data = await response.json();
  
      console.log(data.results);
      setData(data.results);
  
      console.log(data, "DATA");
    };
 


  return (
    <div>
     <h1>{item.name}</h1>
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
     <button>closed</button>
    </div>
  );
};

export default FlipCard;



{/* <Card style={{ width: "18rem" }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}