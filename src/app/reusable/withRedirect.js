import React from "react";
import { withRouter } from "react-router-dom";

const withRedirect = C => {
  class WithRedirect extends React.Component {
    to = route => {
      const { history } = this.props;
      history.push(route);
    };

    render() {
      return <C to={this.to} {...this.props} />;
    }
  }

  return withRouter(WithRedirect);
};

export default withRedirect;
