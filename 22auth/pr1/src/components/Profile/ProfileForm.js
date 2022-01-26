import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const passwordInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    const toBody = {
      idToken: authCtx.token,
      password: enteredPassword,
      returnSecureToken: false,
    };
    fetch(process.env.REACT_APP_AUTH_URL_UPDATE_PASSWORD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toBody),
    }).then(() => {
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={passwordInputRef}
          minLength="7"
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
