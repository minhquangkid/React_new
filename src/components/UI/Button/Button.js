import React from "react";
import styled from "styled-components";
import styles from "./Button.module.css";
// mặc dù import cụ thể 1 file css nhưng ta có thể sử dụng các class từ các file css khác mà ko cần import, để tránh gây nhầm lẫn css ta sử dụng css modules
// dùng import classes from "./Button.css"; cũng được

// tạo component Button nhưng sử dụng package styled
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;
// tạo 1 styled component tên là Button cho thẻ button
// sử dụng responsive với @media (min-width: 768px) tức là các thiết bị lớn hơn 768px sẽ được thu lại nút button, còn thiết bị nhỏ hơn 768px như di động sẽ hiện width=100%

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
// sử dụng css module cho nút button bằng lệnh className={styles.button}
export default Button;
// dùng styled-components để xác định rõ định dạng css cho 1 đối tượng, nhằm giúp ko nhầm lẫn với các đối tượng khác khi dùng theo class thông thường
