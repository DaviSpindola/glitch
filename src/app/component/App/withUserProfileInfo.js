import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

/**
 * This component is responsible for inject session informations for they childrens
 */
const withUserProfileInfo = C => {
  class WithUserProfileInfo extends React.Component {
    render() {
      return <C {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    session: state.sessionState,
    userProfile: state.userState
  });

  return compose(connect(mapStateToProps))(WithUserProfileInfo);
};

export default withUserProfileInfo;
