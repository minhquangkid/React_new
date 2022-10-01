import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [test, setTest] = useState("");

  useEffect(() => {
    console.log("đã tạo");
    // console.log(test);
    const handleScroll = () => {
      // console.log("window.scrollY", window.scrollY);
      // setTest(window.scrollY);
      // console.log(test);
      // console.log("run");
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("đã xóa");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* - dùng useEffect để tạo addEventListener duy nhất 1 lần cho window, và useEffect sẽ ko bao giờ chạy lại nữa. Ở đây ta đã tạo addEventListener nên chương trình sẽ chờ khi sự kiện scroll xảy ra và chỉ chạy mỗi hàm handleScroll (do addEventListener gọi) chứ ko chạy lại toàn bộ useEffect
 - Dùng return để xóa EventListener chỉ khi component Navbar này bị xóa khỏi DOM (mà trong bài này thì ko cần xóa nên nó vô dụng) chứ ko chạy khi hàm handleScroll được gọi. Công dụng xóa là để tránh tràn bộ nhớ

*/

  return (
    <React.Fragment>
      <div
        className={` ${classes.navbarFrame} ${scrolled && classes.transfer}`}
      >
        <Link to={"/"}>
          <h1 className={classes.chu}>Movie App</h1>
        </Link>
        <Link to={"/search"}>
          <span className={classes.searchIcon}>
            <svg
              className="svg-inline--fa fa-search fa-w-16 "
              fill="#ccc"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="30px"
              height="30px"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
