import React, {useEffect, useState} from "react";

const Home = () => {
    const [data, setData] = useState('hamida')

    useEffect(() => {
     fetchData()

    }, []);

    const fetchData = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await response.json()

        console.log(data)

    }
    


  return (
    <div>
      <input></input>
      <button>Search</button>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="img_avatar.png"
              alt="Avatar"
              
            />
          </div>
          <div className="flip-card-back">
            <h1>hi</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;


/* style="width:300px;height:300px;" */