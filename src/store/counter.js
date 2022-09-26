import { createSlice } from "@reduxjs/toolkit";

const initialStateCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      // nếu trong redux bình thường thì ta ko được phép dùng như vậy, nhưng trong toolkit có 1 gói tên là imgur giúp ta gỡ bỏ được vấn đề này và sài bình thường, giúp cho ko phải return về 1 state mới mà chỉ cần nhập phần bị thay đổi
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    // payload là thuộc tính cố định có sẵn trong toolkit, ko được tự đặt tên khác
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// dùng reducers để tạo các hàm trong trong creatSlice sẽ tránh được việc dùng if hoặc switch case quá nhiều trong redux

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
// toolkit sẽ tự động tạo các actions tương ứng với các hàm đã tạo trong counterSlice