import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  withStyles
} from "@material-ui/core";
import { compose } from "recompose";

const FeedItem = ({
  author: { username, photo, nickname },
  content,
  created_at,
  classes
}) => {
  return (
    <ListItem button className={classes.root} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={photo} />
      </ListItemAvatar>
      <ListItemText
        primary={`${username} ${created_at.toDate().toLocaleString("pt-br")}`}
        secondary={<Typography component="p" children={content} />}
      />
    </ListItem>
  );
};

const styles = ({ palette }) => ({
  root: {
    padding: 15,
    border: `1px solid ${palette.primary.main}`,
    backgroundColor: palette.primary.light,
    marginBottom: 5,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: palette.primary.light
    }
  }
});

const mapStateToProps = state => ({
  photo: state.userState.photo
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(FeedItem);
