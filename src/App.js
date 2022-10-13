import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function App() {
  // const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <Fragment>
      <div className="layout">
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <HomePage />
          </Route>
          <Route path="/shop">
            <Navbar />
            <ShopPage />
          </Route>
          <Route path="/cart">
            <Navbar />
            <CartPage />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <CheckoutPage />
          </Route>
          <Route path="/detail/:id">
            <Navbar />
            <DetailPage />
          </Route>
        </Switch>
      </div>
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/register">
        <RegisterPage />
      </Route>

      <Footer />
    </Fragment>
  );
}

export default App;
