import React from "react";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import styles from "./styles";
import * as routes from "../../../constants/routes";
import SettingsEditContainer from "../../component/Session/Settings/SettingsEditContainer";

const SettingsPage = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Switch>
        <Route
          path={routes.SETTINGS_PAGE_EDIT}
          render={props => <SettingsEditContainer {...props} />}
        />
      </Switch>
    </div>
  );
};

export default withStyles(styles)(SettingsPage);
