import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
// ExpensesList sẽ lọc ra trước 1 danh sách mới, sau đó nó mới truyền vào ExpensesItem để xuất ra
export default Expenses;
