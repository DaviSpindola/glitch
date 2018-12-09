import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import MainPage from "./pages/MainPage";
import * as routes from "../constants/routes";
import * as User from "../firebase/firestore/user";
import SettingsPage from "./pages/SettingsPage";
import NavigationBar from "./component/Session/NavigationBar";

class TwitterContainer extends React.Component {
  componentDidMount() {
    const { authUser, setSessionUser, history } = this.props;

    if (authUser && authUser.uid !== null) {
      User.get(authUser).then(snapshot => {
        snapshot.ref.onSnapshot(doc => {
          setSessionUser(doc.data());
        });
      });
    }

    // if (authUser && authUser.uid !== undefined) {
    //   history.push(`${routes.MAIN_BASE}/${authUser.uid}`);
    // }
  }

  render() {
    const { classes, sessionUser } = this.props;

    return (
      <React.Fragment>
        {Object.keys(sessionUser) > 0 ? (
          <h1>carregando</h1>
        ) : (
          <div className={classes.main}>
            <NavigationBar />
            <Switch>
              <Route
                path={`${routes.MAIN_BASE_PROFILE}`}
                render={props => <MainPage {...props} />}
              />
              <Route
                path={routes.SETTINGS_PAGE}
                render={props => <SettingsPage {...props} />}
              />
            </Switch>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  sessionUser: state.sessionUserState
});

const mapDispatchToProps = dispatch => ({
  setSessionUser: informations =>
    dispatch({ type: "SET_SESSION_USER_INFORMATIONS", informations })
});

const styles = theme => ({
  main: {
    marginTop: 65
  }
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TwitterContainer);
