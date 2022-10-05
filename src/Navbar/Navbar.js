import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className={classes.frame}>
      <div className={classes.textLeft}>
        <span
          onClick={() => {
            history.push("/");
          }}
          className={classes.active}
        >
          Home
        </span>
        <span
          onClick={() => {
            history.push("/shop");
          }}
        >
          Shop
        </span>
      </div>

      <span className={classes.titile}>BOUTIQUE</span>

      <div className={classes.textRight}>
        <span
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </span>
        <span
          onClick={() => {
            history.push("/cart");
          }}
        >
          Cart
        </span>
      </div>
    </div>
  );
};

export default Navbar;
