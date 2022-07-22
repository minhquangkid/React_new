import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

// cho dù ExpenseItem có được truyền vào bao nhiêu thì trong khai báo hàm này cũng chỉ có 1 tham số là props, và các giá trị truyền vào là các thuộc tính của props (phải điền đúng tên thuộc tính)
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
