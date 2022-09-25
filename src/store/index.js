// có thể import toàn bộ redux bằng lệnh import redux from 'redux'
import { createStore } from "redux";
const innitialState = { counter: 0, showCounter: true };
const counterReducer = (state = innitialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
    // phải luôn luôn trả về giá trị state mới (dùng return) chứ ko được phép dùng kiểu tự tăng state.counter++ (thao tác trực tiếp với nó)
    /* ko bao giờ được phép làm như sau :
    if (action.type === "increment") { state.counter++
    return {
      counter: state.counter,
      showCounter: state.showCounter,
    };

    mặc dù kết quả vẫn ra đúng nhưng nó vi phạm qui tắc về bộ nhớ, sẽ dễ bị sai trong các trường hợp khác
    -tham khảo :https://academind.com/tutorials/reference-vs-primitive-values
    */
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
// đây ko phải là component, mà là nơi lưu trữ của redux
