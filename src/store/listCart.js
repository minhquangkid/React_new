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
        // state.content[action.payload.order].amout = action.payload.value;
        let index = state.content.findIndex(
          (e) => e._id.$oid === action.payload.order
        );
        if (index !== -1) {
          state.content[index].amout = action.payload.value;
        }
      }
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
