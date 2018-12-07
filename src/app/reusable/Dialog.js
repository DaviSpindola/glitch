import React from "react";
import { Dialog } from "@material-ui/core";

class DialogContainer extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const { children, render, classes } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        {React.cloneElement(render, { onClick: this.handleOpen })}
        <Dialog
          className={classes}
          color="primary"
          open={open}
          onClose={this.handleClose}
        >
          {children}
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DialogContainer;
