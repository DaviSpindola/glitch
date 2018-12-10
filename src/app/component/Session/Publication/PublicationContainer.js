import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import PublicationForm from "./PublicationForm";
import * as Media from "../../../../firebase/storage/media";
import withAuthentication from "../../../reusable/withAuthentication";
import * as Publication from "../../../../firebase/firestore/user/plubication";

/**
 * Manage user publications
 *
 * @author davispindola
 * @version 1.0
 */
class PublicationContainer extends React.Component {
  state = {
    content: "",
    mediaImage: null,
    isLoading: false
  };

  /**
   * Uploads image
   */
  handleImage = () => {
    const { authUser } = this.props;
    const { mediaImage } = this.state;
    if (process.env.NODE_ENV !== "production") console.log(mediaImage);
    Media.uploadMedia(authUser.uid, mediaImage).then(({ ref }) => {
      ref.getDownloadURL().then(url => this.handlePost({ dowloadUrl: url }));
    });
  };

  /**
   * Upload post
   */
  handlePost = media => {
    const { authUser, sendNotification } = this.props;
    const { content } = this.state;

    Publication.post({ content, ...media }, authUser).then(() => {
      sendNotification("Você acaba de fazer uma publicação!");
      this.setState({ isLoading: false, mediaImage: null, content: "" });
    });
  };

  /**
   * Post publication
   */
  handleSubmit = e => {
    this.setState({ isLoading: true });

    const { content, mediaImage } = this.state;
    e.preventDefault();

    if (process.env.NODE_ENV !== "production") {
      const { content, mediaImage } = this.state;
      console.log("content:", content);
      console.log("media image:", mediaImage);
    }

    // publication contain content or media image : true
    if (content !== "" || mediaImage !== null) {
      // if contain media handleImage -> handlePost or handlePost
      mediaImage ? this.handleImage() : this.handlePost();
    } else {
      if (process.env.NODE_ENV !== "production") {
        const { content, mediaImage } = this.state;
        console.log("content:", content);
        console.log("media image:", mediaImage);
      }
    }
  };

  isValid = () => {
    const { content, mediaImage } = this.state;
    return content === "" || mediaImage === null;
  };

  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { isLoading } = this.state;

    return isLoading ? (
      <Loader type="Triangle" color="#fff" />
    ) : (
      <PublicationForm
        handleSubmit={this.handleSubmit}
        {...this.state}
        handleInput={this.handleInput}
        disabled={this.isValid}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendNotification: message => dispatch({ type: "SEND_NOTIFICATION", message })
});

export default compose(
  withAuthentication([]),
  connect(
    null,
    mapDispatchToProps
  )
)(PublicationContainer);
