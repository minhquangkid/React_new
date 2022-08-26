import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
// {...props.input } dùng để đưa hết các thuộc tính của input vào, chẳng hạn như type: text , id : number
// ref trong {ref} màu cam là amountInputRef của component cha Input
export default Input;
