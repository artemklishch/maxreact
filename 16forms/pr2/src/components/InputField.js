import React from "react";

const InputField = ({
  label,
  labelId,
  type,
  inputIsInvalid,
  inputChangeHandler,
  inputVaue,
  onBlurHandler,
  errorText,
}) => {
  const nameInputClasses = inputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <div className={nameInputClasses}>
      <label htmlFor={labelId}>{label}</label>
      <input
        type={type}
        id={labelId}
        onChange={inputChangeHandler}
        value={inputVaue}
        onBlur={onBlurHandler}
      />
      {inputIsInvalid && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default InputField;
