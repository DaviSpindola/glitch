import React from "react";
import _ from "lodash";
import { withStyles } from "@material-ui/core";

const MediaBox = ({ media, classes }) => (
  <div>
    {media.map(({ url }) => {
      return (
        <span>
          <img className={classes.image} src={url} alt={"posted media"} />
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
