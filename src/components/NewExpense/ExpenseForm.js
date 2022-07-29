import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // có thể sử dụng từng cái state như trên hoặc gộp chung nó lại được vì nó nằm trong cùng 1 form
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  //sự kiện onChange kích hoạt khi có 1 sự thay đổi trong khung text, nó sẽ nhận tham số đầu vào là cái sự thay đổi đó, xem console.log(event) ta sẽ thấy có thuộc tính là target và bên trong nó là value

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  // hàm setUserInput sẽ xóa cái dữ liệu state cũ đi và điền vào cái mới nên ta phải dùng toán tử spread là ...userInput để nó điền lại chính giá trị hiện tại của các phần tử khác khi amount được cập nhật cái mới
  // Nhưng ...userInput cũng chưa chắc đưa về đúng snap shot của dữ liệu trước đó, nên ta sử dụng ...prevState thì nó sẽ chính xác hơn
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // tạo ra object lưu trữ
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(expenseData);
    // thuộc tính onSaveExpenseDate là hàm sẽ nhận tham số được điền trong form
    //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // sau khi lưu dữ liệu trên form xong thì tiến hành xóa hết nội dung trên form bằng cách đặt lại giá trị state, giá trị xóa này sẽ được hiển thị thông qua thuộc tính value của tag input
  };
  // thẻ form tự bản thân nó có sự kiện onSubmit, nên ta phải dùng event.preventDefault để ngăn chặn tính năng mặc định tự gửi đi thông tin của nó
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
// value là giá trị hiển thị của input, nó dùng để cập nhật giá trị mới của các state khi có thay đổi
// đây là Two-way-binding: liên kết hai chiều có nghĩa là mọi thay đổi liên quan đến dữ liệu ảnh hưởng đến mô hình sẽ được truyền ngay lập tức đến các chế độ xem phù hợp và mọi thay đổi được thực hiện trong chế độ xem của người dùng sẽ được phản ánh ngay lập tức trong mô hình bên dưới. Khi dữ liệu ứng dụng thay đổi, UI cũng vậy và ngược lại.
export default ExpenseForm;
