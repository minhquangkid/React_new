import React, { useState } from "react";
import useData from "../../data/data";
import classes from "./Search.module.css";

const ResultList = () => {
  const [movie, setMovie] = useState([]);

  useData(
    "https://api.themoviedb.org/3/discover/tv?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_network=123",
    searchHandle
  );

  function searchHandle(e) {
    setMovie(e.results);
  }

  const list = movie.map((item) => {
    // console.log(arr);
    return (
      <img
        key={item.id}
        id={item.id}
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt="none"
        width="200px"
        height="auto"
        className={classes.poster}
        // onClick={clickHandle}
      />
    );
  });

  return <div className={classes.frame}>{list}</div>;
};

export default ResultList;
