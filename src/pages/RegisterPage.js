import React from "react";
import { Link, useHistory } from "react-router-dom";
import bannerImg from "../Resource Assignment 03/banner1.jpg";
import classes from "./RegisterPage.module.css";
import { useState, useRef } from "react";

const RegisterPage = () => {
  const history = useHistory();
  let userArray = localStorage.getItem("user") || [];
  if (userArray.length !== 0) {
    userArray = JSON.parse(userArray);
  }
  console.log(userArray);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const phoneRef = useRef();

  const [validated, setValidated] = useState({ status: false, message: [] });

  const nameValidated = (inf, err) => {
    const getName = nameRef.current.value;
    if (getName === "") {
      err.push("khong de trong input name");
      return;
    }

    const test = userArray.filter((item) => {
      return item.name === getName;
    });
    console.log(test);
    if (test.length !== 0) {
      console.log("bi trung");
      err.push("user Full name da ton tai");
      return;
    }

    inf.name = getName;
  };

  const emailValidated = (inf, err) => {
    const getEmail = emailRef.current.value;
    if (getEmail === "") {
      err.push("khong de trong input email");
      return;
    }
    if (!getEmail.includes("@")) {
      err.push("email phai co @");
      return;
    }
    inf.email = getEmail;
  };

  const passValidated = (inf, err) => {
    const getPass = passRef.current.value;
    if (getPass === "") {
      err.push("khong de trong password");
      return;
    }
    if (getPass.length < 9) {
      err.push("password phai nhieu hon 8 ki tu");
      return;
    }
    inf.pass = getPass;
  };

  const phoneValidated = (inf, err) => {
    const getPhone = phoneRef.current.value;
    if (getPhone.length < 10) {
      err.push("sdt phai nhieu hon 9 so");
      return;
    }
    inf.phone = getPhone;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let inf = {};
    let err = [];
    nameValidated(inf, err);
    emailValidated(inf, err);
    passValidated(inf, err);
    phoneValidated(inf, err);

    if (err.length !== 0) {
      console.log(...err);
      setValidated({ status: false, message: err });
      return;
    }

    console.log("submit thanh cong");
    console.log(inf);
    setValidated({ status: true, message: [] });

    //
    userArray.push(inf);
    localStorage.setItem("user", JSON.stringify(userArray));
    //
    history.push("/login");
  };

  return (
    <div className={classes.banner}>
      <img src={bannerImg} alt="banner" />
      <div className={classes.signForm}>
        <h2>Sign Up</h2>
        <form className={classes.form} onSubmit={formSubmit}>
          <input type="text" placeholder="Full Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="Password" placeholder="Password" ref={passRef} />
          <input type="number" placeholder="Phone" ref={phoneRef} />
          <button className={classes.btn}>SIGN UP</button>
          {!validated.status &&
            validated.message.map((item) => {
              return (
                <p className={classes.err} key={item}>
                  {item}
                </p>
              );
            })}
          <p>
            Login?
            <span>
              <Link to="/login">Click</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
