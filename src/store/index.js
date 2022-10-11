import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./PopupStore";
import listShopReducer from "./ListShopStore";
import loginReducer from "./LoginStatus";

// popupReducer là ta tự đặt tên, nó sẽ lấy phần export default từ các trang xuất

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// vì chỉ có 1 reducer nên ta làm như vầy, nếu có nhiều reducer thì ta làm như dưới

const store = configureStore({
  reducer: {
    popup: popupReducer,
    listShop: listShopReducer,
    login: loginReducer,
  },
});

// combineReducers trong redux có tác dụng combine tất cả reducer lại thành 1 cái duy nhất và truyền vào createStore
// configureStore cũng bao gồm tính năng của combineReducers

export default store;
// đây ko phải là component, mà là nơi lưu trữ của redux
