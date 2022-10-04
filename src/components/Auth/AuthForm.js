import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // có thể thêm validation

    // SIGN IN là đăng nhập vào tài khoản đã có (giống LOGIN), còn SIGN UP là tạo 1 tài khoản mới
    // isLogin == true tức là người dùng đã có tài khoản, nếu chưa có (isLogin == false) thì chuyển sang bước sign up
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=        AIzaSyCxzTWs_dM4H1hR-AXMR2JQg7RzYevFYGc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=        AIzaSyCxzTWs_dM4H1hR-AXMR2JQg7RzYevFYGc";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          }); // nếu dữ liệu trả về lỗi thì ta muốn biết phản hồi đi kèm trong nó như thế nào
        }
      })
      .then((data) => {
        // console.log(data);

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        // cách làm này hơi vòng vo, vd : expiresIn là 1000s thì lấy thời điểm hiện tại + expiresIn, sau đó lại lấy kết quả đi trừ cho thời điểm hiện tại ? vậy tại sao ko dùng thẳng luôn expiresIn cho rồi ??
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
        //nếu đăng nhập thành công thì chuyển đến trang home, và ko thể quay lại trang cũ do dùng replace

        // expiresIn là số GIÂY (ko phải mili giây) cho đến khi idToken hết hạn, đó ko phải là dấu (mốc) thời gian
      })
      .catch((err) => {
        alert(err.message);
      });
    // làm theo hướng dẫn trong firebase
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
