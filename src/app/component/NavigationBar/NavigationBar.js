import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  withStyles,
  MenuItem,
  ListItemIcon,
  ListItemText,
  MenuList
} from "@material-ui/core";
import Navigation from "./Navigation";
import styles from "./styles";
import PostContainer from "../Post/PostContainer";
import FloatMenu from "../../reusable/FloatMenu";
import { ExitToApp } from "@material-ui/icons";
import { auth } from "../../../firebase";

const NavigationBar = ({ classes }) => {
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.lateralMenu}>
          <FloatMenu
            render={
              <Avatar src="https://pbs.twimg.com/profile_images/1067918897008033793/QPA_el_p_400x400.jpg" />
            }
          >
            <MenuList>
              <MenuItem onClick={() => auth.doSignOut()}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText>sair</ListItemText>
              </MenuItem>
              <MenuItem>oi</MenuItem>
              <MenuItem>oi</MenuItem>
            </MenuList>
          </FloatMenu>
          <PostContainer />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(NavigationBar);
