import React from "react";
import ProfileSidebar from "../../component/ProfileSidebar";
import FeedContainer from "../../component/Feed";
import { withStyles } from "@material-ui/core";

class MainPage extends React.Component {
  render() {
    const { classes, match } = this.props;

    return (
      <div className={classes.root}>
        <ProfileSidebar match={match} />
        <FeedContainer match={match} />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    paddingTop: 10
  }
});

export default withStyles(styles)(MainPage);
