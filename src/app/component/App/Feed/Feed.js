import React from "react";
import { List, withStyles, Typography } from "@material-ui/core";
import _ from "lodash";
import FeedItemContainer from "./FeedItemContainer";
import PublicationContainer from "../../Session/Publication/PublicationContainer";

const Feed = ({ posts, classes, canPost }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {canPost && (
          <div className={classes.publication}>
            <PublicationContainer />
          </div>
        )}

        {!(posts !== null && posts.length > 0) ? (
          <div className={classes.publication}>
            <Typography variant="overline">
              você ainda não possui publicações
            </Typography>
          </div>
        ) : (
          <List>
            {_.orderBy(posts, ["created_at"], ["desc"]).map(
              ({ content, created_at, author, dowloadUrl }, key) => (
                <FeedItemContainer
                  key={key}
                  content={content}
                  media={dowloadUrl}
                  uid={author}
                  created_at={created_at}
                />
              )
            )}
          </List>
        )}
      </div>
    </div>
  );
};

const styles = ({ palette }) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 100
  },
  container: {
    width: "50%",
    "@media (max-width: 480px)": {
      width: "100%"
    },
    "& > ul": {
      width: "100%",
      paddingTop: 0
    }
  },
  publication: {
    display: "flex",
    justifyContent: "center",
    padding: 15,
    border: `1px solid ${palette.primary.main}`,
    backgroundColor: palette.primary.contrast,
    marginBottom: 5,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: palette.primary.contrast
    }
  }
});

export default withStyles(styles)(Feed);
