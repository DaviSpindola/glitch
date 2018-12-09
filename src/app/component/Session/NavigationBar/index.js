import React from "react";
import { connect } from "react-redux";

import NavigationBar from "./NavigationBar";
import withSessionInfo from "../withSessionInfo";

class NavigationBarContainer extends React.Component {
  render() {
    return <NavigationBar {...this.props} />;
  }
}

export default withSessionInfo(NavigationBarContainer);
