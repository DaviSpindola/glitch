import React from "react";
import PropTypes from "prop-types";
import { TextField, IconButton, withStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";

import styles from "./styles";
import { noop } from "../../../../utils/types";

/**
 * @author davispindola
 * @version 1.0
 *
 * @param {*} props
 */
const PublicationForm = props => {
  const { classes, content, mediaImage, handleInput, handleSubmit } = props;

  const handleImage = ({ target }) => {
    if (process.env.NODE_END !== "production") {
      console.log(target.files[0]);
    }

    handleInput(target.name, target.files[0]);
  };

  const handleContent = ({ target }) => {
    handleInput(target.name, target.value);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formContent}>
          <TextField
            fullWidth
            value={content}
            name="content"
            label={`Digite o que vocês está pensando?`}
            onChange={handleContent}
          />
        </div>

        <div className={classes.formActions}>
          <div className={classes.actions}>
            <input
              onChange={handleImage}
              name="mediaImage"
              type="file"
              accept="image/*"
            />
          </div>
          <div className={classes.send}>
            <IconButton
              disabled={!(content.length > 0) && mediaImage === null}
              type="submit"
            >
              <Send />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

PublicationForm.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.string,
  handleInput: PropTypes.func
};

PublicationForm.defaultProps = {
  classes: styles,
  content: "",
  handleInput: noop
};

export default withStyles(styles)(PublicationForm);
