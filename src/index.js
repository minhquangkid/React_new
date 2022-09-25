import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// redux
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// tạo ra thuộc tính store để chứa nơi lưu trữ store của redux, truyền vào các component con
