import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameInputiRef = useRef();
  const streetInputiRef = useRef();
  const postalInputiRef = useRef();
  const cityInputiRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputiRef.current.value;
    const enteredStreet = streetInputiRef.current.value;
    const enteredPostal = postalInputiRef.current.value;
    const enteredCity = cityInputiRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameClass = `${classes.control} ${
    !formInputsValidity.name && classes.invalid
  }`;
  const streetClass = `${classes.control} ${
    !formInputsValidity.street && classes.invalid
  }`;
  const postalClass = `${classes.control} ${
    !formInputsValidity.postal && classes.invalid
  }`;
  const cityClass = `${classes.control} ${
    !formInputsValidity.city && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputiRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputiRef} type="text" id="street" />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputiRef} type="text" id="postal" />
        {!formInputsValidity.postal && (
          <p>Please enter a valid postal code (5 characters)!</p>
        )}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input ref={cityInputiRef} type="text" id="city" />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
