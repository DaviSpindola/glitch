import React from "react";
import FeedItem from "./FeedItem";

import * as User from "../../../firebase/firestore/user";

class FeedItemContainer extends React.Component {
  state = {
    author: null
  };

  componentDidMount() {
    const { uid } = this.props;

    User.get(uid)
      .then(snapshot => {
        this.setState({ author: snapshot.data() });
      })
      .catch(console.error);
  }

  render() {
    const { author } = this.state;
    console.log(author);
    return (
      <div>{!!author && <FeedItem {...this.props} author={author} />}</div>
    );
  }
}

export default FeedItemContainer;
