import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";

//https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js

// const Header = () => {
//     const [ scrolled, setScrolled ] = useState()
//     // const classes = classNames('header', {
//     //   scrolled: scrolled,
//     // })
//     useEffect(() => {
//       const handleScroll = () => {
//         if (window.pageYOffset > 100) {
//           setScrolled(true)
//         } else {
//           setScrolled(false)
//         }
//       }
//       window.addEventListener('scroll', handleScroll)
//     //   return () => {
//     //     window.removeEventListener('scroll', handleScroll)
//     //   }
//     }, [])

const Navbar = () => {
  // const [trans, setTrans] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const clickHandler = () => {
  //   setTrans(!trans);
  // };

  return (
    <React.Fragment>
      <div
        className={` ${classes.navbarFrame} ${scrolled && classes.transfer}`}
      >
        <h1 className={classes.chu}>Movie App</h1>
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
        {/* <button onClick={clickHandler}>click</button> */}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
