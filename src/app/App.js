import React, { Component } from "react";
import "./App.css";
import PagesContainer from "./pages";
import withAuthentication from "./reusable/withAuthentication";
import { noAuthRoutes } from "../constants/routes";

class App extends Component {
  componentDidMount() {
    document.title = "Twitter";
  }

  render() {
    return (
      <React.Fragment>
        <PagesContainer />
      </React.Fragment>
    );
  }
}

export default withAuthentication([...noAuthRoutes])(App);
