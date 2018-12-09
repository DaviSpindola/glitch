import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Switch, Route, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import * as routes from "../../../constants/routes";
import FeedContainer from "../../component/App/Feed";
import * as User from "../../../firebase/firestore/user";
import ProfileSidebar from "../../component/App/ProfileSidebar";
import ProfileCanopy from "../../component/App/ProfileCanopy";
import NavigationBar from "../../component/Session/NavigationBar";
import PostContainer from "../../component/Session/Post/PostContainer";

class MainPage extends React.Component {
  componentDidMount() {
    const { match, setUserProfile } = this.props;
    if (match.params.uid) {
      User.get(match.params).then(snapshot => {
        snapshot.ref.onSnapshot(doc => {
          setUserProfile(doc.data());
        });
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <ProfileSidebar match={match} k/> */}
        <ProfileCanopy />
        <Switch>
          <Route
            exact
            path={routes.MAIN_BASE_PROFILE}
            render={props => (
              <div>
                <ProfileSidebar {...props} />
                <FeedContainer {...props} />
              </div>
            )}
          />
        </Switch>
        <PostContainer />
      </div>
      // // );
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  }
});

const mapDispatchToProps = dispatch => ({
  setUserProfile: user => dispatch({ type: "SET_USER_INFORMATIONS", user })
});

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(MainPage);
