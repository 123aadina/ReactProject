import React, { useEffect, useState } from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  const [arrowCounter, setArrowarrowCounter] = useState(1)
  
  //fething the data
  useEffect(() => {
    fetchData('');
  }, [arrowCounter]);

  const fetchData = async (input) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${input}&page=${arrowCounter}`);
    const data = await response.json();

    console.log(data.results);
    setData(data.results);
    
    console.log(data, "DATA");
  };

  //changing the page according to the function
 const arrowHandle = (n) => {
  setArrowarrowCounter(arrowCounter + n)
}

  console.log("selected", selected);

  return (
    <div>
      <Search fetchData={(value)=> fetchData(value)} />
      <div className="flexContainer">
        {data &&
          !selected &&
          data.map((item, id) => {
            return (
              <Card item={item} key={item._id} setSelected={setSelected} />
            );
          })}
        {selected && <FlipCard id={selected.id} setSelected={setSelected} />}
        <button onClick={() => arrowHandle(1)}>Forward</button>
        <button onClick={() => arrowHandle(-1)}>Backward</button>
      </div>
    </div>
  );
};

export default Home;
