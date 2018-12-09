import React from "react";
import FeedItem from "./FeedItem";
import withUserProfileInfo from "../withUserProfileInfo";

class FeedItemContainer extends React.Component {
  render() {
    return (
      <div>
        <FeedItem {...this.props} />
      </div>
    );
  }
}

export default withUserProfileInfo(FeedItemContainer);
