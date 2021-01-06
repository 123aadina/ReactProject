import React, { useState } from "react";

const Search = ( {fetchData}) => {
  const [input, setInput] = useState('')

  
  return (
    <div className="baner">
      <div className="header">
           <input type="text" onChange={(event) => setInput(event.target.value)}  placeholder="Search..."/>
           <button onClick={() =>fetchData(input)}> search</button>
      </div>
    </div>
  );
};

export default Search;
