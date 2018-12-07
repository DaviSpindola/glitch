import React from "react";
import { TextField, Button, withStyles, Checkbox } from "@material-ui/core";
import styles from "./styles";

const Form = ({ handleInput, handleSubmit, classes, ...inputs }) => {
  const { username, nickname, email, password, isChecked } = inputs;

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="sigup-username"
        label="Username"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <TextField
        id="sigup-nickname"
        label="Nickname"
        name="nickname"
        value={nickname}
        onChange={handleInput}
      />
      <TextField
        id="sigup-email"
        label="Email"
        name="email"
        value={email}
        onChange={handleInput}
        type="email"
      />
      <TextField
        id="sigup-password"
        label="Password"
        name="password"
        value={password}
        onChange={handleInput}
        type="password"
      />
      <Checkbox
        id="sigup-is-checked"
        children="a"
        color="primary"
        value={isChecked}
        checked={isChecked}
        onChange={handleInput}
      />
      <Button type="submit" color="primary" variant="outlined">
        Inscrever-se
      </Button>
    </form>
  );
};

export default withStyles(styles)(Form);
