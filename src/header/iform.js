import React, { Component } from "react";
import styles from "./header.module.css";
const Ico = () => {
  return <i className="fa fa-bed"></i>;
};

const Iform = (props) => {
  // console.log(props.isPick);

  const change = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    if (e.target.id == "fa fa-calendar") {
      console.log("correct");
      props.receive(true);
      console.log(props.isPick);
    }
  };
  return (
    <React.Fragment>
      {/* <span>{<Ico />}</span> */}
      <span style={{ marginLeft: "20px" }}>
        <i className={props.content.icon}></i>
      </span>
      <input
        type="text"
        placeholder={props.content.label}
        className={styles.textForm}
        id={props.content.icon}
        onClick={(e) => {
          change(e);
        }}
        defaultValue={
          props.content.icon === "fa fa-calendar" ? props.dienvao : ""
        }
      ></input>
    </React.Fragment>
  );
};

export default Iform;
// placeholder là 1 thuộc tính như là color, font-size nên không thể áp dụng JSX vào trong nó được
// ở đây ta tách icon riêng ra bên ngoài, kế nó là input
// ta có thể tạo 1 component ngay trong trang js của component cha và chèn nó vào như Ico vào Iform
// để sự kiện pick calendar chỉ xảy ra khi ta click vào ô text calendar, ta sẽ tạo 1 thuộc tính id cho <input> , ta không thể tạo thuộc tính như key thay cho id vì khi console.log(e) ta đọc property của nó thì chỉ có id là được dùng chứ ko có key

// dùng Value thì nó chỉ nhận giá trị của calendar mà không thể nhập bằng tay được (read-only), nên ta dùng defaultValue thì có thể sử dụng được cả 2
// TRÁNH NHẦM LẪN việc điền giá trị vào defaultValue chứ không phải placeholder
