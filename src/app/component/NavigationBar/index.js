import React from "react";
import { connect } from "react-redux";

import NavigationBar from "./NavigationBar";

class NavigationBarContainer extends React.Component {
  render() {
    return <NavigationBar {...this.props} />;
  }
}

const mapStateToProps = state => ({
  photo: state.sessionUserState.photo
});

export default connect(mapStateToProps)(NavigationBarContainer);
