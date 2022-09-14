import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import classes from "./browse.module.css";
import Banner from "../../banner/banner.js";

function Browse() {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}

export default Browse;
