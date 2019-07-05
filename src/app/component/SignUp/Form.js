import React from "react";
import { TextField, Button, withStyles } from "@material-ui/core";
import styles from "./styles";

const Form = ({ handleInput, handleSubmit, classes, ...inputs }) => {
  const { name, username, email, password } = inputs;

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="sigup-username"
        label="Nome"
        name="name"
        value={name}
        onChange={handleInput}
      />
      <TextField
        id="sigup-nickname"
        label="User"
        name="username"
        value={username}
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
        label="Senha"
        name="password"
        value={password}
        onChange={handleInput}
        type="password"
      />
      <Button fullWidth type="submit" color="secondary" variant="outlined">
        enviar
      </Button>
    </form>
  );
};

export default withStyles(styles)(Form);
