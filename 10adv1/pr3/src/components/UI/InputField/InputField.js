import React from "react";
import classes from "./InputField.module.css";

const InputField = (props) => {
  const { type, id, label, isValid, value, onChange, onBlur } = props;
  return (
    <div className={`${classes.control} ${!isValid ? classes.invalid : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputField;
