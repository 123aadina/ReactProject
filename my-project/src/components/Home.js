import React, { useEffect, useState } from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";

const Home = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();


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

  console.log('selected', selected)
  return (
    <div className="flexContainer">
      { data && !selected &&
        data.map((item, id) => {
          return <Card item={item} key={item._id} setSelected={setSelected} />
        })} 
        {selected && <FlipCard id={selected.id} setSelected={setSelected} />}
       
    </div>
  );
};

export default Home;











