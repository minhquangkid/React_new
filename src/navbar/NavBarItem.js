import React from "react";
import styles from "./NavBarItem.module.css";

const NavBarItem = (props) => {
  return (
    <div className={`${styles.lab} ${props.test.active && styles.active}`}>
      {/*Nếu props.test.active là true thì kích hoạt .lab.active*/}

      <i className={`fa ${props.test.icon}`}></i>
      <span style={{ padding: "10px" }}>{props.test.type}</span>
    </div>
  );
};

export default NavBarItem;
