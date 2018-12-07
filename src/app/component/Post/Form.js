import React from "react";
import { TextField, Button, withStyles } from "@material-ui/core";
import styles from "./styles";
import Actions from "./Actions";

const Form = ({ content, classes, handleSubmit, handleInput, onChange }) => (
  <div className={classes.dialog}>
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        name="content"
        value={content}
        onChange={handleInput}
        multiline
        label="O que está acontencendo?"
        className={classes.inputContent}
        rowsMax="4"
      />
      <div>
        <Actions onChange={onChange} />
        <Button type="submit" color="primary" children="Tweetar" />
      </div>
    </form>
  </div>
);

export default withStyles(styles)(Form);
