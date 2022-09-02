import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// componentWillUnmount sẽ chạy trước khi component được gỡ khỏi DOM
// nó hiển thị console.log 3 lần là do gỡ 3 cái <li>

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
