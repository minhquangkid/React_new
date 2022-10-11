import { createSlice } from "@reduxjs/toolkit";

const initialListCart = {
  content: [],
  //   isShow: false,
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
      state.content = action.payload;
      //   state.isShow = true;
    },
    delete_cart(state, action) {
      state.content = action.payload;
      //   state.isShow = true;
    },
    // hide_popup(state) {
    //   state.isShow = false;
    // },
  },
});

export default ListCart.reducer;
export const listCartActions = ListCart.actions;

// các thuộc tính .reducer và .actions là có sẵn trong createSlice
