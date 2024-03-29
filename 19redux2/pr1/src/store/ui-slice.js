import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { cartIsVisible: false };
const uiSlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
