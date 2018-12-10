import React from "react";
import { connect } from "react-redux";

import DialogContainer from "../../../reusable/Dialog";
import Form from "./Form";
import { post } from "../../../../firebase/firestore/user/post";
import { Button, withStyles, Fab, Icon } from "@material-ui/core";
import { compose } from "recompose";
import styles from "./styles";
import Actions from "./Actions";
import { upload } from "../../../../firebase/storage";
import PublicationContainer from "../Publication";

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
          classes={classes.root}
          render={
            <Fab className={classes.postButton}>
              <Icon>create</Icon>
            </Fab>
          }
        >
          <PublicationContainer />
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
