import InputField from "./InputField";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    hasError: nameHasError,
    valueChangeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredAge,
    hasError: valueHasError,
    valueChangeHandler: ageInputChangeHandler,
    blurHandler: ageInputBlurHandler,
    valueIsValid: enteredAgeIsValid,
    reset: resetAgeInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredNameIsValid && enteredAgeIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid || !enteredAgeIsValid) {
      return;
    }
    console.log("enteredName", enteredName);
    console.log("enteredName", enteredAge);
    resetNameInput();
    resetAgeInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <InputField
        label="Your Name"
        labelId="name"
        type="text"
        inputIsInvalid={nameHasError}
        inputChangeHandler={nameInputChangeHandler}
        inputVaue={enteredName}
        onBlurHandler={nameInputBlurHandler}
        errorText="Name must not be empty."
      />
      <InputField
        label="Your Age"
        labelId="age"
        type="number"
        inputIsInvalid={valueHasError}
        inputChangeHandler={ageInputChangeHandler}
        inputVaue={enteredAge}
        onBlurHandler={ageInputBlurHandler}
        errorText="Age must not be empty."
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
