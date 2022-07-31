import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.inValid ? "yellow" : "#ccc")};
//     background: ${(props) => (props.invalid ? "blue" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
// tạo 1 styled component cho thẻ div, nó sẽ có các thuộc tính css như  margin: 0.5rem 0;
// nếu những thứ bên trong nó có chứa input, label thì nó sẽ sử dụng thuộc tính css là & input, & label cho input và label đó
// tại border của input, ta sử dụng arrow function, với tham số đầu vào là props, nếu props.invalid là true thì sẽ dùng red

// sau đó xóa đi các dòng này vì ko cần nữa
/*
  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
  &.invalid label {
    color: red;
  }
*/

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    // reset lại nếu người dùng nhập vào khác rỗng
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    // trim để loại bỏ khoảng trắng thừa ở đầu hoặc cuối, câu lệnh dùng kiểm tra xem người dùng có nhập nội dung rỗng hay ko, nếu là rỗng thì ko thực thi gì cả
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && "invalid"}> */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
// dùng dấu [] trong styles["form-control"] vì giữa từ form và control có dấu "-" nên ko dùng styles.form-control được

// sử dụng  <div className={`form-control ${!isValid ? "invalid" : ""}`}> để dùng class .form-control.invalid đã tạo ở file css cho trường hợp người dùng nhập rỗng, và nó sẽ ko được dùng khi người dùng nhập khác rỗng

// nếu chúng ta ko sử dụng toán tử điều kiện thì ta có thể sử dụng cách khác là dùng props cho FormControl. Tạo 1 thuộc tính là invalid nhận tham số là !isValid, nếu !isValid là true thì nó sẽ kích hoạt thuộc tính invalid, và ngược lại sẽ ko kích hoạt
export default CourseInput;
