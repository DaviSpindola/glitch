import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  withStyles,
  Typography,
  Icon,
  IconButton
} from "@material-ui/core";
import styles from "./styles";
// import FloatMenu from "../../../reusable/FloatMenu";
// import { ExitToApp } from "@material-ui/icons";
import { auth } from "../../../../firebase";
import LinkButton from "../../../reusable/LinkButton";

const NavigationBar = ({
  classes,
  sessionUser: { photo },
  session: { authUser }
}) => {
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography color="secondary">GLITCH</Typography>
        </div>
        <div className={classes.lateralMenu}>
          <LinkButton route={`/profile/${authUser.uid}`}>
            <Avatar className={classes.avatar} src={photo} />
          </LinkButton>
          <LinkButton route="/edit">
            <IconButton>
              <Icon>settings</Icon>
            </IconButton>
          </LinkButton>
          <IconButton onClick={() => auth.doSignOut()}>
            <Icon>directions_run</Icon>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(NavigationBar);
