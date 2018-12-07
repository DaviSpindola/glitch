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
  classes,
  media
}) => {
  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <div className={classes.publicationHeader}>
        <div className={classes.headerAuthor}>
          <ListItemAvatar className={classes.avatar}>
            <Avatar src={photo} />
          </ListItemAvatar>
          <Typography>{username}</Typography>
        </div>
        <Typography
          children={`${created_at.toDate().toLocaleString("pt-br")}`}
        />
      </div>
      <div className={classes.publicationContent}>
        <Typography>{content}</Typography>
      </div>
      {console.log(media)}
      {!!media && media !== "" && (
        <div className={classes.mediaBox}>
          <img
            className={classes.media}
            src={media}
            alt={`${created_at.toDate().toLocaleString("pt-br")}`}
          />
        </div>
      )}
    </ListItem>
  );
};

const styles = ({ palette }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: 400,
    padding: 15,
    border: `1px solid ${palette.primary.main}`,
    backgroundColor: palette.primary.light,
    marginBottom: 5,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: palette.primary.light
    }
  },
  publicationHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "5px 0 15px 0"
  },
  publicationContent: {
    padding: "10px 0"
  },
  headerAuthor: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    marginRight: 15
  },
  mediaBox: {
    width: "inherit",
    maxHeight: 400,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer"
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
