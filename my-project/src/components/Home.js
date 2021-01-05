import React, { useEffect, useState } from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState('');

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
  console.log("searched", searched);
  console.log("selected", selected);

  const filterData = () => {
    if(input ===''){
      return data
    }else {
      return data.filter((item) => item.name.toLowerCase().includes(input.toLocaleLowerCase()))
    };
  };

  return (
    <div>
      <div className="baner">
        <div className="header">
          
          {/* <input
          type="text"
          value=""
          id="search-input"
          placeholder="Search..."
          onChange={handleOnInputChange} 
        /> */}
          {input && (
            <h1> {input.name} </h1>
            /*  <div>
             <img
               src={input.image}
               alt="Avatar"
               width="300"
               height="300"
               className="imageCard"
             />
           </div> */
          )}
          <input value={input} onInput={(e) => setInput(e.target.value)} />
          <button onClick={() => setSearched()}>Search</button>
        </div>
      </div>
      {/* searched &&  */
      /* id={searched.id} */}{" "}
      {/* {<Search setSearched={setSearched}  />} */}
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
