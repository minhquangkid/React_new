import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="layout">
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <HomePage />
            <Footer />
          </Route>
          <Route path="/shop">
            <Navbar />
            <ShopPage />
            <Footer />
          </Route>
          <Route path="cart">
            <Navbar />
            <CartPage />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <CheckoutPage />
            <Footer />
          </Route>
          <Route path="/detail/:id">
            <Navbar />
            <DetailPage />
            <Footer />
          </Route>
        </Switch>
      </div>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Fragment>
  );
}

export default App;
