import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./Button";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredage, setenteredage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredUsername.trim().length === 0 || enteredage.trim().length === 0){
      return;
    }
    if(+enteredage < 0){
      return;
    }

    console.log(enteredUsername, enteredage);
    setenteredUsername("");
    setenteredage("");
  };
  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setenteredage(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredage}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;