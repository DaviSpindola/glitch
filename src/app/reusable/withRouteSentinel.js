import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as routes from "../../constants/routes";

const withRouteSentinel = C => {
  class RouteSentinel extends React.Component {
    componentDidMount() {
      const {
        match: { params },
        history,
        authUser
      } = this.props;
      console.log("with sentinel", params);

      if (params.uid) {
        history.push(`${routes.MAIN_BASE}/${params.uid}`);
      } else {
        history.push(`profile/${authUser.uid}`);
      }
    }

    render() {
      return <C {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  return compose(
    connect(mapStateToProps),
    withRouter
  )(RouteSentinel);
};

export default withRouteSentinel;
