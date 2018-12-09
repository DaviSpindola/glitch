import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

/**
 * This component is responsible for inject session informations for they childrens
 */
const withSessionInfo = C => {
  class WithSessionInfo extends React.Component {
    render() {
      return <C {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    session: state.sessionState,
    sessionUser: state.sessionUserState
  });

  return compose(connect(mapStateToProps))(WithSessionInfo);
};

export default withSessionInfo;
