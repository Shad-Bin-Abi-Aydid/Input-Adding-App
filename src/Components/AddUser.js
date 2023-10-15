import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredage, setenteredage] = useState("");
  const [error,setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title:"Invalid Input",
        message: "Please Enter a Valid Name And Age (Non-Empty Value)"
      });
      return;
    }
    if (+enteredage < 0) {
      setError({
        title:"Invalid Age",
        message: "Please Enter a Valid Age (>0)"
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredage);
    setenteredUsername("");
    setenteredage("");
  };
  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setenteredage(event.target.value);
  };

  const errorHandler =() =>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message= {error.message} onConfirm = {errorHandler}/>}
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
    </div>
  );
};

export default AddUser;
