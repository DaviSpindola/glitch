import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Form from "./Form";
import { auth } from "../../../firebase";
import { compose } from "recompose";

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
    const { setAuthUser, history } = this.props;

    auth
      .doSignInWithEmailAndPassword(this.state)
      .then(authUser => {
        setAuthUser(authUser);
        history.push(`/${authUser.user.uid}`);
      })
      .catch(this.hasHerror);
  };

  hasHerror = error => this.setState({ hasError: error });

  render() {
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
