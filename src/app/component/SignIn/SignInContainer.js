import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import Form from "./Form";
import { auth } from "../../../firebase";
import { compose } from "redux";

import * as routes from "../../../constants/routes";

class SignInContainer extends React.Component {
  state = {
    email: "",
    password: "",
    hasError: null
  };

  handleInput = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.loginUser();
  };

  loginUser = () => {
    const { setAuthUser } = this.props;

    auth
      .doSignInWithEmailAndPassword(this.state)
      .then(authUser => {
        setAuthUser(authUser);
      })
      .catch(this.hasHerror);
  };

  hasHerror = error => this.setState({ hasError: error });

  render() {
    const { authUser } = this.props;
    if (authUser && authUser.uid !== undefined) {
      return <Redirect to={`${routes.MAIN_BASE}/${authUser.uid}`} />;
    }

    return (
      <Form
        inputs={this.state}
        handleSubmit={this.handleSubmit}
        handleInput={this.handleInput}
      />
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => ({
  setAuthUser: authUser => dispatch({ type: "SET_AUTH_USER", authUser })
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInContainer);
