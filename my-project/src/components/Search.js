import React, { useEffect, useState } from "react";

const Search = (props) => {
  /* const [input, setInput] = useState(''); */
  /* const [value, setValue] = useState(''); */
   console.log(props);
 
   /*  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    setSearchCharacter(event.target.value);
  } */
  return (
    <div className="baner">
      <div className="header">
          {/*  <h1> {value.name} </h1> */}
           
           <input type="text"  onChange={(event) => props.filterData(event.target.value)}   placeholder="Search..."/>
          {/*  <button onClick={() => setValue}>Search</button> */}
         {/*   <input type="text" value={value} onChange={(event) => props.filterData(event.target.value)}   placeholder="Search..."/> */}
        {/* <input type="text" value={value} onChange={(event) => props.onChange(event.target.value)}   placeholder="Search..."/> */}
         {/* <input type="text" value={value} onChange={() => {filterData(setInput)}}   placeholder="Search..."/> */}
        {/* <input type="text" value={value} onChange={e => setValue(e.target.value)}   placeholder="Search..."/> */}
        {/* <input value={value} onChange={e => props.filterData(e.target.value)}/> */}
        
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
  };  */


/*  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    setSearchCharacter(event.target.value);
  } */



 {/* <input
          type="text"
          value=""
          id="search-input"
          placeholder="Search..."
          onChange={handleOnInputChange} 
        /> 
        
            <div>
             <img
               src={input.image}
               alt="Avatar"
               width="300"
               height="300"
               className="imageCard"
             />
           </div>  */}