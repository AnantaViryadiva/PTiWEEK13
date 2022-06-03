import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=269ce75a3db3417633d536b5986f0fe9";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.results);
      //console.log(data);
    });
  }, []);

  const titles = data.map((props, index) => {
    return (
      <div>
        <h1 key={index}>{props.title}</h1>
        <p>{props.overview}</p>
        <hr />
      </div>
    );
  });

  return <div className="App">{titles}</div>;
}
