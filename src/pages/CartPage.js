import React, { useEffect, useRef, useState } from "react";
import BannerTop from "../Navbar/bannerTop";
import classes from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listCartActions } from "../store/listCart";
import { tinhtoan, total } from "../data/data";
import ButtonQuality from "../data/buttonQuality";
import { Link } from "react-router-dom";
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

  const deleteHandle = (e) => {
    // console.log(e.target.parentNode.id);
    dispatch(listCartActions.delete_cart(e.target.parentNode.id));
  };

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(listCart));
  }, [getOrder]);
  // khi click vào thay đổi số lượng sản phẩm hoặc xóa sản phẩm thì sẽ cập nhật lại localStore luôn,còn các trường hợp khác thì ko cập nhật

  const showList = listCart.map((item) => {
    return (
      <div className={classes.list} key={item._id.$oid} onClick={getOrder}>
        <div>
          <img src={item.img1} alt={item.name} />
        </div>
        <div>
          <h5>{item.name}</h5>
        </div>
        <div>
          <p>{tinhtoan(item.price)}</p>
        </div>

        <div id={item._id.$oid}>
          <ButtonQuality num={getValue} getAmout={item.amout} />
        </div>

        <div>{tinhtoan(total(item.price, item.amout))}</div>
        <div id={item._id.$oid}>
          <h5 onClick={deleteHandle}>REMOVE</h5>
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
          <div className={`${classes.list} ${classes.title}`}>
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
          <div className={classes.nav}>
            <Link to="/shop">
              <span className={classes.process}>Continue shopping</span>
            </Link>
            <Link to="/checkout">
              <span className={classes.checkout}>Proceed to checkout</span>
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <h2>CART TOTAL</h2>
          <div>
            <span>SUBTOTAL</span>
            <span className={classes.priceRight}>SUBTOTAL</span>
          </div>
          <hr />
          <div>
            <span>SUBTOTAL</span>
            <span className={classes.priceRight}>SUBTOTAL</span>
          </div>
          <input type="text" placeholder="Enter your coupon" />
          <button>Apply coupon</button>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
