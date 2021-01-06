import React, { useEffect, useState } from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  /* const [input, setInput] = useState(); */
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

 const arrowHandle = (n) => {
  setArrowarrowCounter(arrowCounter + n)
}




/* 
  console.log("input", input); */
  console.log("selected", selected);

  /*  const fetchName = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${input}`);
    const data = await response.json();

    console.log(data.results);
    setInput(data.results);
    
    console.log(data, "DATA");
  }; */
 

/*   const filterName = async ()=> {
    if(input ===''){
      return data
    }else {
      
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${input}`);
    const data = await response.json();

    console.log(data.results);
    return data.results
      
   
    };
  };  */

  //filter the character accroding to the name
  /* const filterData = () => {
    if(input ===''){
      return data
    }else {
      return data.filter((item) => item.name.toLowerCase().includes(input.toLocaleLowerCase()))
    };
  };
 */
  return (
    <div>
     { /** searchbar from the home page working*/}
      {/* <div className="baner">
        <div className="header">
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
      </div> */} 

      { /** searchbar passing data from child to the parent*/}
      {/* {<Search filterData={(value)=> setInput(value)}  />} */}
      {/*  */}
     
      <Search /* filterData={(value)=> setInput(value)} */   fetchData={(value)=> fetchData(value)}  />
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



