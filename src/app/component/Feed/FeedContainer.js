import React from "react";
import { connect } from "react-redux";

import * as Posts from "../../../firebase/firestore/user/post";
import Feed from "./Feed";

class FeedContainer extends React.Component {
  componentDidMount() {
    const { match } = this.props;

    Posts.observerPosts(match.params).subscribe();
  }

  componentWillUnmount() {
    const { match } = this.props;

    Posts.observerPosts(match.params).unsubscribe();
  }

  render() {
    const { feed } = this.props;

    return <Feed posts={feed} />;
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  userProfile: state.userProfile,
  feed: state.feedState.feed
});

const mapDispatchToProps = dispatch => ({
  receivePost: post => dispatch({ type: "RECEIVE_POST", post })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);