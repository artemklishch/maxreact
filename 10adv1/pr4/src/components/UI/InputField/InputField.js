import React, { useRef, useImperativeHandle } from "react";
import classes from "./InputField.module.css";

const InputField = React.forwardRef((props, ref) => {
  const { type, id, label, isValid, value, onChange, onBlur } = props;
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      activateFocus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        !isValid && isValid !== null ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={inputRef}
        // readOnly
        // onFocus={inputRef?.current?.removeAttribute("readonly")}
      />
    </div>
  );
});

export default InputField;
