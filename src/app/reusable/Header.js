import React from "react";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";

const Header = ({ children, classes }) => (
  <AppBar className={classes.root} position="static" color="default">
    <Toolbar className={classes.toolbar}>{children}</Toolbar>
  </AppBar>
);

const styles = theme => ({
  root: {
    boxShadow: "none"
  },
  toolbar: {
    display: "flex",
    "& > *": {
      flex: 1
    }
  }
});

export default withStyles(styles)(Header);
