import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class UserFinder extends Component {
  static contextType = UsersContext;
  // sử dụng useContext trong class thì ta phải dùng static contextType nhưng chỉ dùng được 1 lần cho 1 class component, nếu có từ 2 giá trị trở lên muốn truyền vào thì ta phải tự gộp chúng lại thành 1 mới truyền được
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }
  // componentDidMount sẽ chạy đúng 1 lần duy nhất khi component được gắn vào DOM
  // this.context là cách sử dụng sau khi đã dùng static contextType
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  // componentDidupdate chỉ được thực thi khi class bị render lại do có props hoặc state thay đổi, ở đây nếu ta ko dùng if thì nó sẽ bị lặp lại vô hạn do searchTerm thay đổi liên tục
  searchChangeHandler(event) {
    console.log({ searchTerm: event.target.value });
    this.setState({ searchTerm: event.target.value });
  }

  /* hợp nhất 2 cụm {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    }
    và
{ searchTerm: event.target.value }
    */
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
// nếu ko có {} trong {searchTerm: event.target.value} thì sao ?
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
