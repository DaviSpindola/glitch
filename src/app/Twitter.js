import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import * as routes from "../constants/routes";

import NavigationBar from "./component/NavigationBar/NavigationBar";
import MainPage from "./pages/MainPage";

class TwitterContainer extends React.Component {
  componentDidMount() {
    const { history, authUser } = this.props;
  }

  render() {
    // const { authUser } = this.props;

    return (
      <React.Fragment>
        <NavigationBar />

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

export default connect(mapStateToProps)(TwitterContainer);
