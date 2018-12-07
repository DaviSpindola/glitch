import React from "react";
import { compose } from "recompose";
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
      userProfile: { photo, username, nickname, description },
      classes
    } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar src={photo} />}
          title={username}
          subheader={`@${nickname}`}
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
    backgroundColor: palette.primary.light,
    width: "100%"
  }
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ProfileHeaderCard);
