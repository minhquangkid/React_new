import { useState } from "react";
import classes from "./buttonQuality.module.css";

const ButtonQuality = () => {
  const [number, setNumber] = useState(1);

  const minus = () => {
    setNumber((prev) => prev - 1);
  };
  const plus = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div className={classes.wrapper}>
      <span onClick={minus}>-</span>
      <span className={classes.num}>{number}</span>
      <span onClick={plus}>+</span>
    </div>
  );
};

export default ButtonQuality;
