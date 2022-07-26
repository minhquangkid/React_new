import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React, { useState } from "react";

// import có dấu {} là import 1 thành phần cụ thể trong thư viện, còn ko dùng {} tức là import tổng thể

// cho dù ExpenseItem có được truyền vào bao nhiêu thì trong khai báo hàm này cũng chỉ có 1 tham số là props, và các giá trị truyền vào là các thuộc tính của props (phải điền đúng tên thuộc tính)
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("đã cập nhật");
  // useState phải được đặt trực tiếp trong hàm dùng nó (ko dc đặt trong hàm con,hàm lồng)
  // khi setTitle được cập nhật giá trị mới thì nó chạy lại component ExpenseItem này (xem console.log('đã cập nhật') hiển thị )

  const clickHandle = () => {
    setTitle("Updated");
    console.log(title);
    // khi nhấn nút thì h2 ko tự động cập nhật nội dung title mới, bởi vì IDE (trình biên dịch) chỉ đọc code và render 1 lần khi load trang, nó sẽ không cập nhật render khi có thay đổi sau này,vì vậy ta phải dùng State
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Change Title
      </button> */}
      <button onClick={clickHandle}>Change Title</button>
    </Card>
  );
}
// sự kiện onClick là 1 event nên phải ghi hoa chữ C của onClick, sau đó trong {} phải là 1 hàm để thực thi
// các sự kiện khác cũng bắt đầu bằng chữ on đằng trước (như là onSubmit)
// onClick={clickHandle} không có cặp dấu () ở sau clickHandle
export default ExpenseItem;
