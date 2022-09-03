import { createSlice } from "@reduxjs/toolkit";

const freshReducer = createSlice({
  name: "fresh",
  initialState: { value: 0 },
  reducers: {
    setFresh(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFresh } = freshReducer.actions;

export default freshReducer.reducer;
