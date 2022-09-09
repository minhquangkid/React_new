import { useEffect, useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  // dùng alias trong object destructuring để lấy các giá trị trả về và đồng thời đổi tên chúng

  // (value) => value.trim() !== "" chính là hàm validateValue, với value đóng vai trò là enteredValue tham số của validateValue trong use-input.js
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // mỗi khi state enterdName thay đổi là render lại toàn bộ App.js nên các dòng code này được chạy lại

  let formIsValid = false;
  // vì trong 1 form có nhiều input nên 1 form sẽ valid nếu tất cả các input đều valid

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // nếu form được gửi bằng button chứ không phải bằng form thì http request sẽ được gửi đến server phục vụ trang web này và trang web sẽ bị tải lại, làm mất các state đã lưu. Đồng thời đây là single page chứ ko phải multi page

    if (!enteredName) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
    // reset lại sau khi đã submit thành công
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// nếu ta dùng state kết hợp với onChange của Input thì ta có thể cập nhật state liên tục mỗi khi gõ phím, đồng thời xóa giá trị nhập khi submit xong form bằng setEnterName("") và value={enteredName}
// còn nếu ta dùng useRef thì chỉ cập nhật kết quả trong input khi submit và chỉ xóa được giá trị nhập khi dùng nameInputRef.current.value='' (đây là can thiệp trực tiếp vào DOM, khuyến khích ko nên dùng)
