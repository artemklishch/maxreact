import { useState, useReducer } from "react";

const initialState = { value: "", isTouched: false };

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      value: action.value,
    };
  }
  if (action.type === "BLUR") {
    return {
      ...state,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return {
    value: "",
    isTouched: false,
  };
};

const useInputHook = (validateVal) => {
  const [valueData, dispatch] = useReducer(reducer, initialState);

  const isValValid = validateVal(valueData.value);
  const hasError = !isValValid && valueData.isTouched;

  const valChangeHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };
  const valBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const resetValue = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredVal: valueData.value,
    hasError,
    valChangeHandler,
    valBlurHandler,
    resetValue,
    isValValid,
  };
};
export default useInputHook;
