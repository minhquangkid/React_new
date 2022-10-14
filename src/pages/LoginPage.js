import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./RegisterPage.module.css";
import bannerImg from "../Resource Assignment 03/banner1.jpg";

import { loginActions } from "../store/LoginStatus";
import { useDispatch } from "react-redux";

// khi reload tải lại trang thì tất cả các biến trong redux đều sẽ bị reset về trạng thái ban đầu, nó chỉ ko đổi trong quá trình thao tác nhảy qua nhảy lại giữa các trang. Vì vậy phải dùng localStore của trình duyệt để duy trì đăng nhập khi tải lại trang

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let userArray = localStorage.getItem("user") || [];
  if (userArray.length !== 0) {
    userArray = JSON.parse(userArray);
  }
  console.log(userArray);

  const emailRef = useRef();
  const passRef = useRef();

  const [validated, setValidated] = useState({ status: false, message: [] });

  const emailValidated = (inf, err) => {
    const getEmail = emailRef.current.value;
    if (getEmail === "") {
      err.push("Không để trống input email");
      return;
    }
    if (!getEmail.includes("@")) {
      err.push("Email phải có @");
      return;
    }

    const test = userArray.filter((item) => {
      return item.email === getEmail;
    });
    // console.log(test);
    if (test.length === 0) {
      console.log("Không có email nào trùng");
      err.push("Không có email nào trùng");
      return;
    }
    // lấy hết toàn bộ dữ liệu mà có mail trùng gắn vô inf
    inf.email = getEmail;
  };

  const passValidated = (inf, err) => {
    const getPass = passRef.current.value;
    if (getPass === "") {
      err.push("Không để trống password");
      return;
    }
    if (getPass.length < 9) {
      err.push("Password phải nhiều hơn 8 kí tự");
      return;
    }

    const test = userArray.filter((item) => {
      return item.pass === getPass && item.email === inf.email;
      // phải kiểm tra cả 2 điều kiện đồng thời
    });
    console.log(test);
    if (test.length === 0) {
      console.log("Nhập sai mật khẩu");
      err.push("Nhập sai mật khẩu");
      passRef.current.value = "";
      return;
    }
    // lấy hết toàn bộ dữ liệu mà có pass trùng gắn vô inf
    // inf = test;
    // ở đây nếu dùng inf.pass = getPass; giống bên RegisterPage thì được (thêm 1 thuộc tính cho object của biến hoặc dùng err.push("nhap sai mat khau") thì được), nhưng thay đổi giá trị inf thành test (inf = test) thì lại ko được ??
    inf.pass = getPass;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let inf = {};
    let err = [];

    emailValidated(inf, err);
    passValidated(inf, err);
    // ban đầu tìm xem có mail nào trùng không ?
    // sau khi mail trùng thì mới tìm xem có pass nào trùng ko? , khi qua được 2 bước ktra thì gắn toàn bộ giá trị của account đó vô inf (vì ko tồn tại 2 email trùng nhau,nhưng có thể trùng mật khẩu nhưng khác mail)

    if (err.length !== 0) {
      console.log(...err);
      setValidated({ status: false, message: err });
      return;
    }

    [inf] = userArray.filter((item) => {
      return item.email === inf.email;
    });
    // vì ko thể gán trực tiếp giá trị khớp ngay trong các hàm emailValidated và passValidated nên ta đành phải gán inf trong hàm formSubmit này

    console.log("submit thanh cong");
    console.log(inf);
    setValidated({ status: true, message: [] });
    //

    userArray.push(inf);
    dispatch(loginActions.on_login(inf));
    localStorage.setItem("on_login", JSON.stringify(inf));
    //
    history.push("/");
  };

  return (
    <div className={classes.banner}>
      <img src={bannerImg} alt="banner" />
      <div className={classes.signForm}>
        <h2>Sign In</h2>
        <form className={classes.form} onSubmit={formSubmit}>
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="Password" placeholder="Password" ref={passRef} />
          {!validated.status &&
            validated.message.map((item) => {
              return (
                <p className={classes.err} key={item}>
                  {item}
                </p>
              );
            })}
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
