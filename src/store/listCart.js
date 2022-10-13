import { createSlice } from "@reduxjs/toolkit";

const initialListCart = {
  content: [],
  // listAmount: [],
};

// các thuộc tính name, initialState, reducers là có sẵn trong createSlice
const ListCart = createSlice({
  name: "ListCart",
  initialState: initialListCart,
  reducers: {
    add_cart(state, action) {
      state.content = action.payload;
      //   state.isShow = true;
    },
    update_cart(state, action) {
      if (state.content.length !== 0) {
        let index = state.content.findIndex(
          (e) => e._id.$oid === action.payload.order
        );
        if (index !== -1) {
          state.content[index].amout = action.payload.value;
        }
        // findIndex là để tìm vị trí id trong mảng, khi có rồi sẽ cập nhật số lượng cho đúng đối tượng (nếu bằng -1 là lúc đầu chưa có gì sẽ ko tìm được kết quả trùng và trả về -1)
      }
      // điều kiện if (state.content.length !== 0) là ban đầu state.content === [], chưa cập nhật dữ liệu kịp sẽ gây nên lỗi, nên ta sẽ ko chạy đến khi nào có được dữ liệu và render lại
    },
    delete_cart(state, action) {
      let index = state.content.findIndex((e) => e._id.$oid === action.payload);
      state.content.splice(index, 1);
    },
  },
});

export default ListCart.reducer;
export const listCartActions = ListCart.actions;

// các thuộc tính .reducer và .actions là có sẵn trong createSlice
