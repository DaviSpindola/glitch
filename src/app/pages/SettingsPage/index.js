import React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "../../../constants/routes";
import SettingsEditContainer from "../../component/Session/Settings/SettingsEditContainer";

const SettingsPage = () => {
  return (
    <div>
      <Switch>
        <Route
          path={routes.SETTINGS_PAGE_EDIT}
          render={props => <SettingsEditContainer {...props} />}
        />
      </Switch>
    </div>
  );
};

export default SettingsPage;
