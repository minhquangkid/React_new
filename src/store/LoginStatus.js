import { createSlice } from "@reduxjs/toolkit";

const initialLoginStatus = {
  content: {},
  isLogin: false,
};

// các thuộc tính name, initialState, reducers là có sẵn trong createSlice
const LoginSlice = createSlice({
  name: "LoginStatus",
  initialState: initialLoginStatus,
  reducers: {
    on_login(state, action) {
      state.content = action.payload;
      state.isLogin = true;
    },
    on_logout(state) {
      state.isLogin = false;
    },
  },
});

export default LoginSlice.reducer;
export const loginActions = LoginSlice.actions;

// các thuộc tính .reducer và .actions là có sẵn trong createSlice
