import React, { useState } from "react";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = (e) => setEnteredUsername(e.target.value);

  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = (e) => setEnteredAge(e.target.value);

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please input a valid name and age (non-empty values)",
      });
      return;
    }
    const newUser = {
      username: enteredUsername,
      age: enteredAge,
      id: new Date().toISOString(),
    };
    props.onAddUser((prevUsers) => [...prevUsers, newUser]);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <div>
      {error && (
        <ErrorModal error={error} onClose={() => setError(null)} />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            onChange={usernameChangeHandler}
            id="username"
            type="text"
          />

          <label htmlFor="age">Age (years)</label>
          <input
            value={enteredAge}
            onChange={ageChangeHandler}
            id="age"
            type="number"
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
