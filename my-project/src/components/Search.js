import React, { useEffect, useState } from "react";

const Search = ({ id, setSearched}) => {
  const [input, setInput] = useState('');

 useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();

    console.log(data);
    setInput(data.results);

    console.log(setInput, "DATA");
  }; 


/*  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    setSearchCharacter(event.target.value);
  } */

  return (
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
        <input value={input} onInput={e => setInput(e.target.value)}/>
        <button onClick={() => setSearched()}>Search</button>
      </div>
    </div>
  );
};

export default Search;




