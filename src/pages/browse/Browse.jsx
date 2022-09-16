import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import classes from "./browse.module.css";
import Banner from "../../banner/banner.js";
import MovieList from "../../body/movieList";

const Browse = () => {
  const api = [
    {
      link: "https://api.themoviedb.org/3/discover/tv?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_network=123",
      typeFilm: "Original",
    },
    {
      link: "https://api.themoviedb.org/3/trending/all/week?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US",
      typeFilm: "Xu Hướng",
    },
    {
      link: "https://api.themoviedb.org/3/movie/top_rated?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US",
      typeFilm: "Xếp hạng cao",
    },
    {
      link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=28",
      typeFilm: "Hành động",
    },
    {
      link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=35",
      typeFilm: "Hài",
    },
    {
      link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=27",
      typeFilm: "Kinh dị",
    },
    {
      link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=10749",
      typeFilm: "Lãng mạn",
    },
    {
      link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=99",
      typeFilm: "Tài liệu",
    },
  ];

  const list = api.map((item) => {
    return (
      <React.Fragment>
        <MovieList getLink={item.link} type={item.typeFilm} />
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      <div className={classes.umbrella}>
        <Navbar />
        <Banner />
        {list}
      </div>
    </React.Fragment>
  );
};

export default Browse;
