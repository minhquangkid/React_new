import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useState } from "react";

const Auth = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const emailHandle = (e) => {
    // console.log(e.target.value);
    if (e.target.value.includes("@")) {
      // console.log(e.target.value);
      setEmailValid(true);
    } else {
      // console.log(e.target.value);
      setEmailValid(false);
    }
  };

  const passHandle = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length !== 0) {
      // console.log(e.target.value);
      setPassValid(true);
    } else {
      // console.log(e.target.value);

      setPassValid(false);
    }
  };

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    if (emailValid && passValid) {
      dispatch(authActions.login());
    } else return;
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={emailHandle} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={passHandle} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
