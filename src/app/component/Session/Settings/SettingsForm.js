import React from "react";
import { Button, withStyles, Input } from "@material-ui/core";
import styles from "./styles";

const SettingsForm = ({
  name,
  username,
  description,
  handleImage,
  handleInput,
  handleSubmit,
  classes
}) => (
  <div className={classes.root}>
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input name="name" value={name} onChange={handleInput} />
      <Input name="username" value={username} onChange={handleInput} />
      <Input name="description" value={description} onChange={handleInput} />
      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={e => handleImage(e)}
      />
      <Button color="secondary" variant="outlined" type="submit">
        atualizar
      </Button>
    </form>
  </div>
);

SettingsForm.defaultProps = {
  name: "",
  username: "",
  description: ""
};

export default withStyles(styles)(SettingsForm);
