// import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: {
    counterReducer: counterSlice.reducer,
    authReducer: authSlice.reducer,
  },
});
// const store = createStore(counterSlice.reducer);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
