import React from "react";
import { withStyles } from "@material-ui/core";

const MediaBox = ({ media, classes }) => (
  <div>
    {media.map(({ dowloadUrl }) => {
      return (
        <span>
          <img
            className={classes.image}
            src={dowloadUrl}
            alt={"posted media"}
          />
        </span>
      );
    })}
  </div>
);

const styles = theme => ({
  image: {
    width: 81,
    height: 81
  }
});

export default withStyles(styles)(MediaBox);
