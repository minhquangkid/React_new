import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "test",
    };
  }
  // trong class component ta bắt buộc phải khai báo state là object, bên trong nó chứa tất cả các đối tượng state và chỉ duy nhất có 1 state này. Khác với function component là ta có thể khai báo state là loại dữ liệu gì cũng được và bao nhiêu cái cũng được

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided");
    }
  }
  // trong quá trình lọc tìm Finder, nếu ko tìm được khớp đối tượng thì sẽ tự tạo ra lỗi

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
  // trong class thì thay đổi state bằng setState, nó sẽ CẬP NHẬT GIÁ TRỊ MỚI VÀ GỘP VÀO CHUNG với state trước đó. Khác với function thì nó sẽ THAY THẾ HOÀN TOÀN STATE CŨ THÀNH STATE MỚI
  /* curState nó tương đương với cụm {
      showUsers: true,
      more: "test",
    };
    */

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
// vì trong hàm toggleUserHandler có sử dụng this.setState nên ta phải dùng bind(this) để cho hàm đó biết this trong setState đang trỏ vào class này

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
