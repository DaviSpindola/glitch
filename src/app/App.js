import React, { Component } from "react";

import PagesContainer from "./pages";
import Notification from "./reusable/Notification";
import { noAuthRoutes } from "../constants/routes";
import withAuthentication from "./reusable/withAuthentication";

class App extends Component {
  componentDidMount() {
    document.title = "Glitch";
  }

  render() {
    return (
      <React.Fragment>
        <PagesContainer />
        <Notification />
      </React.Fragment>
    );
  }
}

export default withAuthentication([...noAuthRoutes])(App);
