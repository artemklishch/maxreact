import useInputHook from "../hooks/useInputHook";

import InputField from "./InputField";

const BasicForm = (props) => {
  const {
    enteredVal: nameValue,
    resetValue: resetName,
    hasError: isNameError,
    valChangeHandler: setName,
    valBlurHandler: blurName,
    isValValid: nameValid,
  } = useInputHook((value) => value.trim() !== "");
  const {
    enteredVal: lastnameValue,
    resetValue: resetLastName,
    hasError: isLastNameError,
    valChangeHandler: setLastName,
    valBlurHandler: blurLastName,
    isValValid: lastnameValid,
  } = useInputHook((value) => value.trim() !== "");
  const {
    enteredVal: emailValue,
    resetValue: resetEmail,
    hasError: isEmailError,
    valChangeHandler: setEmail,
    valBlurHandler: blurEmail,
    isValValid: emailValid,
  } = useInputHook((value) => value.includes("@") && value.trim() !== "");

  let isFormValid = false;
  if (nameValid && lastnameValid && emailValid) {
    isFormValid = true;
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    resetName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="control-group">
        <InputField
          label="First Name"
          labelId="firstname"
          type="text"
          inputIsInvalid={isNameError}
          inputChangeHandler={setName}
          inputVaue={nameValue}
          onBlurHandler={blurName}
          errorText="Write a valid first name"
        />
        <InputField
          label="Last Name"
          labelId="lastname"
          type="text"
          inputIsInvalid={isLastNameError}
          inputChangeHandler={setLastName}
          inputVaue={lastnameValue}
          onBlurHandler={blurLastName}
          errorText="Write a valid last name"
        />
      </div>
      <InputField
        label="E-Mail Address"
        labelId="email"
        type="email"
        inputIsInvalid={isEmailError}
        inputChangeHandler={setEmail}
        inputVaue={emailValue}
        onBlurHandler={blurEmail}
        errorText="Write a valid email address"
      />
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
