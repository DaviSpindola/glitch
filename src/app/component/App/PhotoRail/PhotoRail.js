import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as Media from "../../../../firebase/firestore/user/media";
import MediaBox from "./MediaBox";
import { Typography, Icon } from "@material-ui/core";

class PhotoRail extends React.Component {
  componentDidMount() {
    const { match, receiveMedia } = this.props;
    Media.getAll(match.params).then(res => {
      res.forEach(item => {
        return Object.keys(item.data()).includes("dowloadUrl")
          ? receiveMedia(item.data())
          : false;
      });
    });
  }

  render() {
    const { media } = this.props;

    return (
      <div>
        {media.lenght > 0 && (
          <div>
            <Typography color="textPrimary">
              <Icon fontSize="small">image</Icon>
              {media.length} fotos
            </Typography>
            <MediaBox media={media} />}
          </div>
        )}
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
