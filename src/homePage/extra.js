import { Fragment } from "react";
import classes from "./extra.module.css";

const Extra = () => {
  return (
    <Fragment>
      <div className={classes.frame}>
        <div>
          <h1>FREE SHIPPING</h1>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h1>24 X 7 SERVICE</h1>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h1>FESTIVAL OFFER</h1>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes.sub}>
        <div className={classes.col}>
          <h1>LET'SBE FRIENDS!</h1>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <div className={classes.col}>
          <form>
            <input
              type="text"
              placeholder="Enter your email address"
              className={classes.inp}
            />
            <button className={classes.btnSub}>Subscribe</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Extra;
