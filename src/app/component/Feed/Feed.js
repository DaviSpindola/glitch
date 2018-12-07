import React from "react";
import { List, withStyles } from "@material-ui/core";
import _ from "lodash";
import FeedItemContainer from "./FeedItemContainer";

const Feed = ({ posts, classes }) => {
  return (
    <div className={classes.root}>
      <List>
        {_.orderBy(posts, ["created_at"], ["desc"]).map(
          ({ content, created_at, uid }, key) => (
            <FeedItemContainer
              key={key}
              content={content}
              uid={uid}
              created_at={created_at}
            />
          )
        )}
      </List>
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& > ul": {
      width: "100%",
      paddingTop: 0,
      paddingRight: 15
    }
  }
};

export default withStyles(styles)(Feed);
