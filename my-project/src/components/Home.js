import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState();

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

  return (
    <div className="flexContainer">
      {data &&
        data.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
    </div>
  );
};

export default Home;


