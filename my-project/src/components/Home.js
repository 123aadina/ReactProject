import React, { useEffect, useState } from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  const [input, setInput] = useState('');
  
  //fething the data
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
  console.log("input", input);
  console.log("selected", selected);

  //filter the character accroding to the name
  const filterData = () => {
    if(input ===''){
      return data
    }else {
      return data.filter((item) => item.name.toLowerCase().includes(input.toLocaleLowerCase()))
    };
  };

  return (
    <div>
     { /** searchbar from the home page working*/}
      {/* <div className="baner">
        <div className="header">
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
      </div> */} 

      {<Search filterData={(value)=> setInput(value)}  />}
     {/*  {input} */}

      <div className="flexContainer">
        {data &&
          !selected &&
          filterData().map((item, id) => {
            return (
              <Card item={item} key={item._id} setSelected={setSelected} />
            );
          })}
        {selected && <FlipCard id={selected.id} setSelected={setSelected} />}
      </div>
    </div>
  );
};

export default Home;