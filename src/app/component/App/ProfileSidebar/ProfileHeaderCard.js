import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  withStyles
} from "@material-ui/core";

class ProfileHeaderCard extends React.Component {
  render() {
    const {
      userProfile: { photo, username, name, description },
      classes
    } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar src={photo} />}
          title={name}
          subheader={`@${username}`}
        />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.userState
});

const styles = ({ palette }) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: palette.primary.contrast,
    width: "100%"
  }
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ProfileHeaderCard);
