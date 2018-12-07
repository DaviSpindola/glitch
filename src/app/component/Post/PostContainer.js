import React from "react";
import { connect } from "react-redux";

import DialogContainer from "../../reusable/Dialog";
import Form from "./Form";
import { post } from "../../../firebase/firestore/user/post";
import { Button, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import styles from "./styles";
import Actions from "./Actions";
import { upload } from "../../../firebase/storage";

class PostContainer extends React.Component {
  state = {
    content: ""
  };

  handleInput = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = e => {
    e.preventDefault();

    const { authUser } = this.props;

    post({ ...this.state, uid: authUser.uid }, authUser).then(res => {
      this.setState({ content: "" });
    });
  };

  onChange = e => {
    // const files = Array.from(e.target.files)
    // upload()
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <DialogContainer
          render={<Button className={classes.postButton}>Tweetar</Button>}
        >
          <Form
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            {...this.state}
            onChange={this.onChange}
          />
        </DialogContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  userProfile: state.userState
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(PostContainer);
