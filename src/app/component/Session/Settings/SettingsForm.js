import React from "react";
import {
  Button,
  withStyles,
  Input,
  FormControl,
  FormLabel
} from "@material-ui/core";
import styles from "./styles";

const SettingsForm = ({
  name,
  username,
  description,
  handleImage,
  handleInput,
  handleSubmit,
  classes
}) => {
  const disabled = name.length === 0 || username.length === 0;
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>nome</FormLabel>
          <Input
            placeholder="seu nome"
            name="name"
            value={name}
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>nome de usário</FormLabel>
          <Input
            placeholder="seu user"
            name="username"
            value={username}
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>descrição</FormLabel>
          <Input
            placeholder="descrição"
            name="description"
            value={description}
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>mudar foto de perfil</FormLabel>
          <Input
            type="file"
            name="photo"
            accept="image/*"
            onChange={e => handleImage(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>mudar foto de capa</FormLabel>
          <Input
            type="file"
            name="cover"
            accept="image/*"
            onChange={e => handleImage(e)}
          />
        </FormControl>

        <Button
          disabled={disabled}
          color="secondary"
          variant="outlined"
          type="submit"
        >
          atualizar
        </Button>
      </form>
    </div>
  );
};

SettingsForm.defaultProps = {
  name: "",
  username: "",
  description: ""
};

export default withStyles(styles)(SettingsForm);
