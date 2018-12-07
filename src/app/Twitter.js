import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import * as User from "../firebase/firestore/user";
import MainPage from "./pages/MainPage";
import * as routes from "../constants/routes";
import NavigationBarContainer from "./component/NavigationBar";

class TwitterContainer extends React.Component {
  componentDidMount() {
    const { authUser, setSessionUser } = this.props;

    if (authUser && authUser.uid !== null) {
      User.get(authUser).then(snapshot => {
        snapshot.ref.onSnapshot(doc => {
          setSessionUser(doc.data());
        });
      });
    }
  }

  render() {
    // const { authUser } = this.props;

    return (
      <React.Fragment>
        <NavigationBarContainer />
        <Route
          path={`${routes.MAIN_PAGE}`}
          render={props => console.log(props) || <MainPage {...props} />}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => ({
  setSessionUser: informations =>
    dispatch({ type: "SET_SESSION_USER_INFORMATIONS", informations })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitterContainer);
