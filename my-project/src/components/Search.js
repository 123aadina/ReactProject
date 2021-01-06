import React, { useState } from "react";

const Search = ( {fetchData}) => {
  const [input, setInput] = useState('')

  
  return (
    <div className="baner">
      <div className="header">
           <input type="text"  onChange={(event) => setInput(event.target.value)}  placeholder="Search..."/>
           <button onClick={() =>fetchData(input)}> search</button>
      </div>
    </div>
  );
};

export default Search;




/*
  
    {value && (
           <h1> {value.name} </h1>
        )}
        onChange={(event) => (event.target.value)}
  };  */


/*  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    setSearchCharacter(event.target.value);
  } */



  /**
   * const Search = (props) => {
   console.log(props);
 
  return (
    <div className="baner">
      <div className="header">
           <input type="text" onChange={(event) => props.filterData(event.target.value)} placeholder="Search..."/>
      </div>
    </div>
  );
};
   */