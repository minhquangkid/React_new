import React from "react";
import { Link } from "react-router-dom";
import classes from "./RegisterPage.module.css";
import bannerImg from "../Resource Assignment 03/banner1.jpg";

const LoginPage = () => {
  return (
    <div className={classes.banner}>
      <img src={bannerImg} alt="banner" />
      <div className={classes.signForm}>
        <h2>Sign In</h2>
        <form className={classes.form}>
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />

          <button className={classes.btn}>SIGN IN</button>
          <p>
            Create an account?
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
