import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.head}>
        <h1 className={styles.tieude}>A lifetime of discounts? It's Genius.</h1>
        <p className={styles.tieude}>
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        <button className={styles.button}>Sign in / Register</button>
      </div>
      <div className={styles.inform}>input</div>
    </React.Fragment>
  );
};

export default Header;
