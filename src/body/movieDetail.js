import React from "react";
import classes from "./movieDetail.module.css";

const MovieDetail = (props) => {
  return (
    <div className={classes.frame}>
      <h1>{props.id}</h1>
    </div>
  );
};

export default MovieDetail;
