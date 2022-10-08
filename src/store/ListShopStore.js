import { createSlice } from "@reduxjs/toolkit";

const initialListShopState = {
  content: [],
  //   isShow: false,
};
// tạo state , ta nên gom các state có liên quan đến UI của các component trong thằng store này để xử lý, ko nên để chúng trong các component

// các thuộc tính name, initialState, reducers là có sẵn trong createSlice
const ListShopSlice = createSlice({
  name: "ListShop",
  initialState: initialListShopState,
  reducers: {
    show_list(state, action) {
      state.content = action.payload;
      //   state.isShow = true;
    },
    // hide_popup(state) {
    //   state.isShow = false;
    // },
  },
});

export default ListShopSlice.reducer;
export const listShopActions = ListShopSlice.actions;

// các thuộc tính .reducer và .actions là có sẵn trong createSlice
