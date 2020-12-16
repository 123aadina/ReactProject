import React, {useEffect, useState} from "react";

const Home = () => {
    const [data, setData] = useState()

    useEffect(() => {
     fetchData()

    }, []);

    const fetchData = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await response.json()

        console.log(data)
        setData(data)

    };
    


  return (
    <div>
      <input></input>
      <button>Search</button>

     
    </div>
  );
};
export default Home;


/* style="width:300px;height:300px;" */