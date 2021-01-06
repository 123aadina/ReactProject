import React from "react";

const Search = (props) => {

   console.log(props);
 
  return (
    <div className="baner">
      <div className="header">
           <input type="text"  onChange={(event) => props.filterData(event.target.value)}   placeholder="Search..."/>
      </div>
    </div>
  );
};

export default Search;




/* useEffect(() => {
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
    { id, setSearched, setInput, filterData}


    {value && (
           <h1> {value.name} </h1>
           
        
        )}
        , { useEffect, useState }
  };  */


/*  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    setSearchCharacter(event.target.value);
  } */
