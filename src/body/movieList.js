import React, { useState, useEffect } from "react";
import classes from "./movieList.module.css";
import useData from "../data/data";

const MovieList = (props) => {
  const [arr, setArr] = useState([]);
  let isOriginal = props.type === "Original";

  const { data } = useData(props.getLink, arrayHandle);

  function arrayHandle(e) {
    setArr(e.results);
  }
  // e trong arrayHandle chính là data của useData

  const list = arr.map((item) => {
    return (
      <img
        key={item.id}
        src={`https://image.tmdb.org/t/p/original/${
          isOriginal ? item.poster_path : item.backdrop_path
        }`}
        alt="none"
        width="250px"
        height="auto"
        className={classes.pic}
      />
    );
  });

  return (
    <React.Fragment>
      <h2 className={classes.tieude}>{props.type}</h2>
      <div className={classes.cover}>{list}</div>
    </React.Fragment>
  );
};
export default MovieList;
