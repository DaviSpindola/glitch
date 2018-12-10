import React from "react";
import { connect } from "react-redux";

import * as Publications from "../../../../firebase/firestore/user/plubication";
import Feed from "./Feed";

class FeedContainer extends React.Component {
  componentDidMount() {
    const { match, receivePost } = this.props;
    receivePost([]);

    if (match.params.uid) {
      Publications.observePublications(match.params).subscribe();
    }
  }

  componentWillUnmount() {
    const { match } = this.props;
    if (match.params.uid) {
      Publications.observePublications(match.params).unsubscribe();
    }
  }

  render() {
    const { feed, authUser, match } = this.props;
    return <Feed canPost={authUser.uid === match.params.uid} posts={feed} />;
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  userProfile: state.userProfile,
  feed: state.feedState.feed
});

const mapDispatchToProps = dispatch => ({
  receivePost: feed => dispatch({ type: "RECEIVE_POST", feed }),
  addPost: post => dispatch({ type: "ADD_POST", post })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
