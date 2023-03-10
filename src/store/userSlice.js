const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  msg: "",
  loading: false,
  error: "",
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add(state, action) {
      state.product.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { userAdd, userRemove } = userSlice.actions;

export default userSlice.reducer;
