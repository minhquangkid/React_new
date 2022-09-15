import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import classes from "./browse.module.css";
import Banner from "../../banner/banner.js";
import MovieList from "../../body/movieList";

function Browse() {
  return (
    <React.Fragment>
      <div className={classes.umbrella}>
        <Navbar />
        <Banner />
        <MovieList
          getLink={
            "https://api.themoviedb.org/3/discover/tv?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_network=123"
          }
          type={""}
        />
      </div>
    </React.Fragment>
  );
}

export default Browse;
