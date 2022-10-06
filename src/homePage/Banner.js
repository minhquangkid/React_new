import classes from "./Banner.module.css";
import banner from "../Resource Assignment 03/banner1.jpg";
import { useHistory } from "react-router-dom";
const Banner = () => {
  const history = useHistory();
  return (
    <div className={classes.frame}>
      <img src={banner} alt="banner" />
      <div className={classes.title}>
        <h3>NEW INSPIRATION 2020</h3>
        <h1>20% OFF ON NEW SEASON</h1>
        <button onClick={() => history.push("/shop")}>
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
