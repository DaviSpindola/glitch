import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import * as User from "../../../../firebase/firestore/user";
import ProfileHeaderCard from "./ProfileHeaderCard";

class ProfileSidebar extends React.Component {
  componentDidMount() {
    const { match, setProfile } = this.props;

    User.getUser(match.params).then(res => {
      setProfile(res.data());
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ProfileHeaderCard />
        {/* <PhotoRail match={match} /> */}
      </div>
    );
  }
}

const styles = ({ palette }) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: "min-content",
    marginBottom: 5
    // backgroundColor: palette.secondary.main
  }
});

const mapDispatchToProps = dispatch => ({
  setProfile: currentProfile =>
    dispatch({ type: "SET_CURRENT_PROFILE", currentProfile })
});

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(ProfileSidebar);
