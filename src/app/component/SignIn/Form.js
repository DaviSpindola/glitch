import React from "react";
import { TextField, Button, withStyles } from "@material-ui/core";
import styles from "./styles";

const Form = ({ handleInput, handleSubmit, classes, ...inputs }) => {
  const { email, password } = inputs;

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="signin-email"
        name="email"
        value={email}
        onChange={handleInput}
        label="Email"
        variant="outlined"
      />
      <TextField
        id="sigin-password"
        label="Password"
        name="password"
        onChange={handleInput}
        value={password}
        type="password"
        variant="outlined"
        helperText={<a href="/senha">esqueceu a senha</a>}
      />
      <Button type="submit" color="primary" variant="outlined">
        Login
      </Button>
    </form>
  );
};

export default withStyles(styles)(Form);
