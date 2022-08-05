import React from "react";
import styles from "./form.module.css";
const Form = () => {
  return (
    <div className={styles.bottomBackground}>
      <div className={styles.center}>
        <p className={styles.subcribe}>Save time, save money!</p>
        <p>Sign up and we'll send the besst deals to you</p>
        <input
          type="text"
          className={styles.textInput}
          placeholder="  Your Email"
        ></input>
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};

export default Form;
