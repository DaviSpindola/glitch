import React from "react";
import { withRouter } from "react-router-dom";
import { Tabs, Tab, Icon } from "@material-ui/core";

import * as routes from "../../../constants/routes";

class Navigation extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Tabs value={location.pathname !== "/" ? "" : location.pathname}>
        <Tab value="" />
        <Tab
          icon={<Icon>home</Icon>}
          value={routes.BASE_URL}
          label="Páginal inicial"
        />
      </Tabs>
    );
  }
}

export default withRouter(Navigation);
