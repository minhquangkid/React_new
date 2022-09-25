import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";

// cái nào có chữ use là hook thì dùng cho function component, còn connect thì dùng cho cả function lẫn class đều dc nhưng dùng cho class tốt hơn

import { Component } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  // useDispatch là hàm gửi đi hành động trong redux
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  // useSelector dùng để lấy state từ store ra sài
  // useSelector đã tích hợp sẵn subscription, nên component Counter sẽ được cập nhật tự động, và nhận được counter mới nhất bất cứ khi nào dữ liệu đó thay đổi trong Redux store
  // Những thay đổi đối với Redux store sẽ khiến cho component này chạy lại

  const IncrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  // thuộc tính bổ sung thêm như amount ta gọi là payload

  const DecrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

//----------------------------- nếu dùng redux với class component thì ta làm như sau
// class Counter extends Component {
//   IncrementHandler() {
//     this.props.increment();
//   }
//   DecrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.IncrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.DecrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// /* thay vì dùng
// const counter = useSelector((state) => state.counter);
// ta sẽ dùng như sau, nó tương đương với useSelector
// */
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// // thay vì dùng  const dispatch = useDispatch(); ta sẽ dùng như sau, nó tương đương với useDispatch

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// // trong connect nó đã bao gồm bước subscription
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// hàm connect () khi chạy nó sẽ trả về là 1 hàm function () và ta sẽ truyền Counter vào trong () của function đó
// trong connect nó cũng nhận 2 tham số là 2 hàm

export default Counter;
