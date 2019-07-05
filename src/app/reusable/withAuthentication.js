import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import { auth } from "../../firebase/firebase";
import * as r from "../../constants/routes";

const withAuthentication = routes => C => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { location, authUser, setAuthUser } = this.props;

      auth.onAuthStateChanged(user => {
        user ? setAuthUser(user) : this.clearState();
      });

      if (authUser) {
        if (!routes.includes(location.pathname)) {
          return;
        } else {
          return;
        }
      }
    }

    clearState = () => {
      const { setAuthUser, receivePost } = this.props;

      setAuthUser(null);
      receivePost([]);
    };

    render() {
      const { authUser, location } = this.props;
      if (
        !authUser &&
        location.pathname !== "/landing" &&
        location.pathname !== "/signup"
      ) {
        return <Redirect to={r.LANDING} />;
      }

      return <C {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  const mapDispatchToProps = dispatch => ({
    setAuthUser: authUser => dispatch({ type: "SET_AUTH_USER", authUser }),
    receivePost: feed => dispatch({ type: "RECEIVE_POST", feed })
  });

  return compose(
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(WithAuthentication);
};

export default withAuthentication;
