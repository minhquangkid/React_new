import classes from "./middle.module.css";
import useData from "../data/data";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { listShopActions } from "../store/ListShopStore";

const Middle = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  let listDetail = useSelector((state) => state.listShop.content);

  const getData = (e) => {
    setData(e);
  };

  useData(getData);

  const getTitle = (e) => {
    //   console.log(e.target);
    console.log(e.target.textContent);
    let title = e.target.textContent.toLowerCase();
    // đổi về chữ thường hết
    let array = data.filter((items) => items.category === title);
    dispatch(listShopActions.show_list(array));
  };
  return (
    <div className={classes.container}>
      <div className={classes.leftCol} onClick={getTitle}>
        <h2>CATEGORIES</h2>
        <h4 style={{ backgroundColor: "black", color: "white" }}>APPLE</h4>
        <p>All</p>
        <h4>IPHONE & MAC</h4>
        <p>IPhone</p>
        <p>Ipad</p>
        <p>Macbook</p>
        <h4>WIRELESS</h4>
        <p>Airpod</p>
        <p>watch</p>
        <h4>OTHER</h4>
        <p>Mouse</p>
        <p>Keyboard</p>
        <p>Other</p>
      </div>
      <div className={classes.rightCol}>
        {listDetail.map((e) => {
          return (
            <div key={e._id.$oid} className={classes.box}>
              <img src={e.img1} alt={e.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Middle;
