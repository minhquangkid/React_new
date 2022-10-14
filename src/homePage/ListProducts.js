import { Fragment, useEffect, useState } from "react";
import classes from "./ListProducts.module.css";
import useData from "../data/data";
import { useDispatch } from "react-redux";
import { popupActions } from "../store/PopupStore";
import { tinhtoan } from "../data/data";
import ImgGroup from "../data/imgGroup";
const ListProducts = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useData(getApi);

  function getApi(e) {
    // console.log(e);
    setList(e);
  }

  const getDetail = (e) => {
    // console.log(e.target.parentNode.id);
    const detail = e.target.parentNode.id;
    const [chosen] = list.filter((e) => {
      return e._id.$oid === detail;
    });
    // console.log(chosen);
    dispatch(popupActions.show_popup(chosen));
  };

  const tam = list.map((e) => {
    return (
      <div
        key={e._id.$oid}
        id={e._id.$oid}
        onClick={getDetail}
        className={classes.anh}
      >
        <ImgGroup img1={e.img1} name={e.name} price={e.price} />
      </div>
    );
  });

  return (
    <Fragment>
      <div className={classes.header}>
        <h3>MADE THE HARD WAY</h3>
        <h1>TOP TRENDING PRODUCTS</h1>
      </div>
      <div className={classes.frame}>{tam}</div>
    </Fragment>
  );
};
export default ListProducts;
