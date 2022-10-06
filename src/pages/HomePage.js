import React from "react";
import { Link } from "react-router-dom";
import Banner from "../homePage/Banner";
import ListCategories from "../homePage/ListCategories";
import ListProducts from "../homePage/ListProducts";
import Popup from "../homePage/Popup/Popup";
import classes from "./HomePage.module.css";
import { useSelector } from "react-redux";

const HomePage = () => {
  const show = useSelector((state) => state.popup.isShow);
  return (
    <div>
      <Banner />
      <ListCategories />
      <ListProducts />
      {show && <Popup />}
    </div>
  );
};
export default HomePage;
