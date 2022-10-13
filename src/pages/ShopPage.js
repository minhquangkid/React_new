import React from "react";
import { Link } from "react-router-dom";
import BannerTop from "../Navbar/bannerTop";

import Middle from "../shopPage/middle";

const ShopPage = () => {
  return (
    <div>
      <BannerTop left={"Shop"} right={"Shop"} />
      <Middle />
    </div>
  );
};
export default ShopPage;
