import React, { Component } from "react";

const Ico = () => {
  return <i className="fa fa-bed"></i>;
};

const Iform = (props) => {
  return (
    <React.Fragment>
      <span>{<Ico />}</span>
      <input type="text" placeholder="something"></input>
    </React.Fragment>
  );
};

export default Iform;
// placeholder là 1 thuộc tính như là color, font-size nên không thể áp dụng JSX vào trong nó được
// ở đây ta tách icon riêng ra bên ngoài, kế nó là input
// ta có thể tạo 1 component ngay trong trang js của component cha và chèn nó vào như Ico vào Iform
