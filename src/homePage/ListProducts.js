import { Fragment, useEffect, useState } from "react";
import classes from "./ListProducts.module.css";
import useData from "../data/data";

const ListProducts = () => {
  const [list, setList] = useState([]);

  useData(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
    getApi
  );

  function getApi(e) {
    console.log(e);
    setList(e);
  }

  const tinhtoan = (arr) => {
    const leng = arr.length;
    let com = ",";
    let chuoi = "";
    let count = 0;

    for (let i = leng - 1; i > -1; i--) {
      chuoi = arr[i].concat(chuoi);
      count++;
      if (count % 3 === 0 && i !== 0) {
        chuoi = com.concat(chuoi);
      }
      // console.log(chuoi);
    }
    return chuoi;
  };
  //count % 3 là count chia 3 lấy phần dư
  const tam = list.map((e) => {
    return (
      <div key={e._id.$oid}>
        <img src={e.img1} alt={e.name} />
        <h3>{e.name}</h3>
        <p>{`${tinhtoan(e.price)} VNĐ`}</p>
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
