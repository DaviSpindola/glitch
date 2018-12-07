import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { auth } from "../../firebase/firebase";

const withAuthentication = routes => C => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { location, history, authUser, setAuthUser } = this.props;

      auth.onAuthStateChanged(user => {
        user ? setAuthUser(user) : setAuthUser(null);
      });

      if (authUser) {
        if (!routes.includes(location.pathname)) {
          return history.push(`/${authUser.uid}`);
        } else {
          return;
        }
      } else {
        return history.push("/landing");
      }
    }

    render() {
      return <C {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  const mapDispatchToProps = dispatch => ({
    setAuthUser: authUser => dispatch({ type: "SET_AUTH_USER", authUser })
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
