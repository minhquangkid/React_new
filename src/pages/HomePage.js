import React from "react";
import { Link } from "react-router-dom";
import Banner from "../homePage/Banner";
import ListCategories from "../homePage/ListCategories";
import ListProducts from "../homePage/ListProducts";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListCategories />
      <ListProducts />
    </div>
  );
};
export default HomePage;
