import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BannerTop from "../Navbar/bannerTop";
import classes from "./CheckoutPage.module.css";
import { useSelector } from "react-redux";
import { tinhtoan, sum } from "../data/data";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { listCartActions } from "../store/listCart";

const CheckoutPage = () => {
  const listCart = useSelector((state) => state.listCart.content);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMemory = JSON.parse(localStorage.getItem("cartList")) || [];

    dispatch(listCartActions.add_cart(getMemory));
  }, []);

  const listCheckout = listCart.map((e) => {
    return (
      <Fragment key={e._id.$oid}>
        <div className={classes.cover}>
          <p>{e.name}</p>
          <p className={classes.priceRight}>{`${tinhtoan(e.price)} x ${
            e.amount
          }`}</p>
        </div>
        <hr />
      </Fragment>
    );
  });

  const formHandle = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Fragment>
      <div>
        <BannerTop left={"CART"} right={"HOME/CART/CHECKOUT"} />
      </div>
      <h2 style={{ textAlign: "left" }}>BILLING DETAILS</h2>
      <div className={classes.frame}>
        <div className={classes.left}>
          <form onClick={formHandle}>
            <p>FULL NAME:</p>
            <input type="text" placeholder="Enter Your Full Name Here" />
            <p>EMAIL:</p>
            <input type="email" placeholder="Enter Your Email Here" />
            <p>PHONE NUMBER:</p>
            <input type="Enter Your Phone Number Here" placeholder="Phone" />
            <p>ADDRESS:</p>
            <input type="text" placeholder="Enter Your Address Here" />
            <button className={classes.btn}>Place Order</button>
          </form>
        </div>

        <div className={classes.right}>
          <h2>CART TOTAL</h2>
          {listCheckout}
          <div>
            <span>TOTAL</span>
            <span style={{ float: "right" }}>{tinhtoan(sum(listCart))}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CheckoutPage;
