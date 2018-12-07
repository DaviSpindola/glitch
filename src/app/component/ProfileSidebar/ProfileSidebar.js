import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import * as User from "../../../firebase/firestore/user";
import * as Media from "../../../firebase/firestore/user/media";
import ProfileHeaderCard from "./ProfileHeaderCard";
import PhotoRail from "../PhotoRail";

class ProfileSidebar extends React.Component {
  componentDidMount() {
    const { match, setProfile } = this.props;

    User.getUser({ nickname: match.params.uid }).then(res => {
      setProfile(res.data());
    });
  }

  render() {
    const { classes, match } = this.props;
    return (
      <div className={classes.root}>
        <ProfileHeaderCard />
        <PhotoRail match={match} />
      </div>
    );
  }
}

const styles = ({ palette }) => ({
  root: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    height: "min-content",
    flexDirection: "column",
    padding: "0 15px"
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
