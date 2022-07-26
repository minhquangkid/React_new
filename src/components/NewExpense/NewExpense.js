import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};
// tạo 1 thuộc tính mới có tên là onSaveExpenseDate, nó là 1 hàm có tên là saveExpenseDataHandler dùng để nhận và lưu dữ liệu từ giao diện người dùng trong component ExpenseForm
export default NewExpense;
