import React from "react";
import withRedirect from "./withRedirect";

class LinkButton extends React.Component {
  handleRoute = () => {
    const { to, route } = this.props;
    to(route);
  };

  render() {
    const { children } = this.props;

    return React.cloneElement(children, {
      onClick: this.handleRoute,
      variant: "outlined"
    });
  }
}

export default withRedirect(LinkButton);
