import React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "../../constants/routes";
import LandingPage from "./LandingPage/index";
import SettingsPage from "./SettingsPage";
import SignUpContainer from "../component/SignUp";
import TwitterContainer from "../Twitter";
import InProgress from "./InProgress";

const pages = [
  {
    isExact: true,
    path: routes.LANDING,
    component: LandingPage
  },
  {
    isExact: true,
    path: routes.SIGN_UP,
    component: SignUpContainer
  },
  {
    isExact: false,
    path: routes.BASE_URL,
    component: TwitterContainer
  },
  // {
  //   isExact: false,
  //   path: '/progress',
  //   component: InProgress
  // }
];

class PagesContainer extends React.Component {
  render() {
    return (
      <Switch>
        {pages.map((page, key) => (
          <Route
            exact={page.isExact}
            path={page.path}
            key={key}
            render={props => <page.component {...props} />}
          />
        ))}
      </Switch>
    );
  }
}

export default PagesContainer;
