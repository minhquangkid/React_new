import classes from "./bannerTop.module.css";

const BannerTop = (props) => {
  return (
    <div className={classes.ban}>
      <h1>{props.left}</h1>
      <h3>{props.right}</h3>
    </div>
  );
};

export default BannerTop;
