// có thể import toàn bộ redux bằng lệnh import redux from 'redux'

import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// vì chỉ có 1 reducer nên ta làm như vầy, nếu có nhiều reducer thì ta làm như dưới

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// combineReducers trong redux có tác dụng combine tất cả reducer lại thành 1 cái duy nhất và truyền vào createStore
// configureStore cũng bao gồm tính năng của combineReducers

export default store;
// đây ko phải là component, mà là nơi lưu trữ của redux
