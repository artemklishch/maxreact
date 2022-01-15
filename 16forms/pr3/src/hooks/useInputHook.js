import { useState } from "react";

const useInputHook = (validateVal) => {
  const [enteredVal, setEnteredVal] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValValid = validateVal(enteredVal);
  const hasError = !isValValid && isTouched;

  const valChangeHandler = (e) => {
    setEnteredVal(e.target.value);
  };
  const valBlurHandler = () => {
    setIsTouched(true);
  };
  const resetValue = () => {
    setEnteredVal("");
    setIsTouched(false);
  };

  return {
    enteredVal,
    hasError,
    valChangeHandler,
    valBlurHandler,
    resetValue,
    isValValid
  };
};
export default useInputHook;
