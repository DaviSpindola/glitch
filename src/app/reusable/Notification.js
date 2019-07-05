import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";

class Notification extends React.Component {
  render() {
    const { message, open, handleClose } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        message={<span>{message}</span>}
      />
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func
};

Notification.defaultProps = {
  message: "",
  open: false,
  handleClose: null
};

const mapStateToProps = state => ({
  message: state.notificationState.message,
  open: state.notificationState.open
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch({ type: "CLOSE_NOTIFICATION" })
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Notification);
