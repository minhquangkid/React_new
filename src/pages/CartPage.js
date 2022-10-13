import React, { useEffect, useRef, useState } from "react";
import BannerTop from "../Navbar/bannerTop";
import classes from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listCartActions } from "../store/listCart";
import { tinhtoan, total } from "../data/data";
import ButtonQuality from "../data/buttonQuality";
import { isFulfilled } from "@reduxjs/toolkit";

const CartPage = () => {
  let theOrder = 0;
  // có nên sài useRef ko ? khi sài phải ghi theOrder.current

  const listCart = useSelector((state) => state.listCart.content);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMemory = JSON.parse(localStorage.getItem("cartList")) || [];

    dispatch(listCartActions.add_cart(getMemory));
  }, []);

  const getOrder = (e) => {
    // console.log(e.target.parentNode.parentNode.id);

    if (e.target.parentNode.parentNode.id) {
      theOrder = e.target.parentNode.parentNode.id;
      console.log(theOrder);
    } else return;
    // nếu e.target.parentNode.parentNode.id có tồn tại (click vào đúng đối tượng có id) thì mới lấy
  };

  const getValue = (e) => {
    // console.log(theOrder);
    // console.log(listCart);
    // console.log(e);
    const gop = { order: theOrder, value: e };

    dispatch(listCartActions.update_cart(gop));
  };

  // if (listCart.length !== 0) {
  //   localStorage.setItem("cartList", JSON.stringify(listCart));
  // }

  const showList = listCart.map((item, index) => {
    return (
      <div
        className={classes.list}
        key={item._id.$oid}
        id={index}
        onClick={getOrder}
      >
        <div>
          <img src={item.img1} alt={item.name} />
        </div>
        <div>
          <h5>{item.name}</h5>
        </div>
        <div>
          <p>{tinhtoan(item.price)}</p>
        </div>

        <div id={index}>
          <ButtonQuality num={getValue} getAmout={item.amout} />
        </div>

        <div>{tinhtoan(total(item.price, item.amout))}</div>
        <div>
          <h5>REMOVE</h5>
        </div>
      </div>
    );
  });

  return (
    <div>
      <BannerTop left={"CART"} right={"CART"} />
      <h1 style={{ textAlign: "left" }}>SHOPPING CART</h1>
      <div className={classes.frame}>
        <div className={classes.left}>
          <div className={classes.list}>
            <div>
              <h5>IMAGE</h5>
            </div>
            <div>
              <h5>PRODUCT</h5>
            </div>
            <div>
              <h5>PRICE</h5>
            </div>
            <div>
              <h5>QUALITY</h5>
            </div>
            <div>
              <h5>TOTAL</h5>
            </div>
            <div>
              <h5>REMOVE</h5>
            </div>
          </div>
          {showList}
        </div>
        <div className={classes.right}>222</div>
      </div>
    </div>
  );
};
export default CartPage;
