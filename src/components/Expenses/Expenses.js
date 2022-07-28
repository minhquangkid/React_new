import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesChart from "./ExpenseChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // tạo ra 1 mảng con từ việc lọc ra từ mảng mẹ là expenses ở App.js
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (
        <p>No expense Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* {filteredExpenses.length === 0 && <p>No expense Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </Card>
  );
}
// trong dấu {} ở JSX thì ko dùng được các lệnh như for, if,... nhưng toán tử 3 ngôi vẫn dùng được

// nếu ta dùng toán tử  && thì điều kiện đầu tiên được thỏa sẽ thực hiện điều kiện thứ 2 (filteredExpenses.length === 0 đúng thì sẽ xuất ra <p>No expense Found</p>) , chia toán tử 3 ngôi thành 2 biểu thức độc lập

// ExpensesList sẽ lọc ra trước 1 danh sách mới, sau đó nó mới truyền vào ExpensesItem để xuất ra
export default Expenses;
