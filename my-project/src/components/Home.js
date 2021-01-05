import React, { useEffect, useState } from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
 /*  const [searched, setSearched] = useState(""); */
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();

    console.log(data.results);
    setData(data.results);
    /* setInput(data.results) */

    console.log(data, "DATA");
  };
  console.log("input", input);
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
      {/* <div className="baner">
        <div className="header">
        {input && (
            <h1> {input.name} </h1> 
          
           )}
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          
        </div>
      </div>  */} 
      {<Search filterData={(value)=> setInput(value)}  />}
      {/* {<Search filterData={(input)=> setInput(input)}  />}  */}
      {/* {<Search onChange={(value)=> setInput(value)}  />}  */} 
      {/* {<Search filterData={filterData}  />}   */}
      {input}
     {/*  {<Search  setInput={setInput} filterData={filterData}  />} */}

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


{/* <button onClick={() => setSearched()}>Search</button> */}