import { Fragment } from "react";
import classes from "./ListCategories.module.css";
import img1 from "../Resource Assignment 03/product_1.png";
import img2 from "../Resource Assignment 03/product_2.png";
import img3 from "../Resource Assignment 03/product_3.png";
import img4 from "../Resource Assignment 03/product_4.png";
import img5 from "../Resource Assignment 03/product_5.png";
import { useHistory } from "react-router-dom";

const ListCategories = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/shop");
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <h3>CAREFULLY CREATED COLLECTIONS</h3>
        <h1>BROWSE OUR CATEGORIES</h1>
      </div>

      <div className={classes.frame} onClick={clickHandler}>
        <div className={classes.col}>
          <div className={classes.back}></div>
          <img src={img1} alt="1" />
        </div>

        <div className={classes.col}>
          <img src={img2} alt="2" />
        </div>
      </div>
      <div className={classes.frame} onClick={clickHandler}>
        <div className={classes.col}>
          <img src={img3} alt="3" />
        </div>
        <div className={classes.col}>
          <img src={img4} alt="4" />
        </div>
        <div className={classes.col}>
          <img src={img5} alt="5" />
        </div>
      </div>
    </Fragment>
  );
};
export default ListCategories;
