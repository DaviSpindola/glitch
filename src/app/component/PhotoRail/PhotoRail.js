import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as Media from "../../../firebase/firestore/user/media";
import MediaBox from "./MediaBox";
import { Typography } from "@material-ui/core";

class PhotoRail extends React.Component {
  componentDidMount() {
    const { match, receiveMedia } = this.props;
    Media.getAll(match.params).then(res => {
      res.forEach(item => {
        receiveMedia(item.data());
      });
    });
  }

  render() {
    const { media } = this.props;

    return (
      <div>
        <Typography color="textPrimary">photo rail</Typography>
        <MediaBox
          media={
            media.length > 5
              ? media.slice(Math.max(media.length - 6, 1))
              : media
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  media: state.mediaState.media
});

const mapDispatchToProps = dispatch => ({
  receiveMedia: media => dispatch({ type: "RECEIVE_MEDIA", media })
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PhotoRail);
