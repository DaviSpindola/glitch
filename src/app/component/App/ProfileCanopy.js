import React from "react";
import { withStyles } from "@material-ui/core";
import { compose } from "redux";
import withUserProfileInfo from "./withUserProfileInfo";

const ProfileCanopy = props => {
  const {
    userProfile: { cover, name },
    classes
  } = props;
  return (
    <div className={classes.root}>
      <img className={classes.cover} src={cover} alt={name} />
    </div>
  );
};

const styles = theme => ({
  root: {
    maxWidth: "100vw",
    maxHeight: 400,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },
  cover: {
    width: "100%"
  }
});

export default compose(
  withUserProfileInfo,
  withStyles(styles)
)(ProfileCanopy);
