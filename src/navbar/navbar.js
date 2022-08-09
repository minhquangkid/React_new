import React from "react";
import styles from "./navbar.module.css";
import NavBarItem from "./NavBarItem";
import nav from "../data/navBar.json";
// import hotel from "../data/hotel_list.json";

// trong file JSON của navBar và hotel_list nó chưa được đặt tên để export, nên ở đây ta tự đặt tên khi import nó như là nav, hotel
const Navbar = () => {
  //console.log(nav);
  // console.log(hotel);
  return (
    <div className={styles.nav}>
      <h3 className={styles.title}>Booking website</h3>
      <button className={styles.button}>Login</button>
      <button className={styles.button}>Register</button>
      {nav.map((item) => {
        return <NavBarItem key={item.type} test={item} />;
      })}
    </div>
  );
};
// ko thể áp dụng các định dạng css cho các components như Navbar, ta chỉ có thể định dạng các thẻ html con trong nó

export default Navbar;
