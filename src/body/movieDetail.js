import React from "react";
import classes from "./movieDetail.module.css";
import Trailer from "../data/trailer";

const MovieDetail = (props) => {
  const detail = props.getInf;
  console.log(detail);
  return (
    <div className={classes.frame}>
      <div>
        <h1>{detail.title}</h1>
        <hr></hr>
        <h3>Release Date : {detail.release_date}</h3>
        <h3>Vote : {detail.vote_average}/10</h3>
        <p>{detail.overview}</p>
      </div>
      <div>
        <Trailer inf={detail} />
      </div>
    </div>
  );
};

export default MovieDetail;
