import React from "react";
import Form from "./Form";
import { auth } from "../../../firebase";
import { postUser, getUser } from "../../../firebase/firestore/user";

class SignUpContainer extends React.Component {
  state = {
    username: "",
    nickname: "",
    email: "",
    password: "",
    isChecked: false
  };

  handleInput = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = e => {
    e.preventDefault();

    getUser(this.state).then(user => {
      if (!user.exists) {
        this.handleRegister();
      }

      alert("ja tem porra");
    });
  };

  handleRegister = () => {
    const { history } = this.props;

    return auth
      .doSignUpWithEmailAndPassword(this.state)
      .then(({ user }) => {
        postUser(this.state, user.uid).then(res => {
          auth.doSignInWithEmailAndPassword(this.state).then(res => {
            history.push(res.user.uid);
          });
        });
      })
      .catch(console.error);
  };

  render() {
    return (
      <Form
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        inputs={this.state}
      />
    );
  }
}

export default SignUpContainer;
