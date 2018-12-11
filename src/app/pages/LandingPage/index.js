import React from "react";
import SignInContainer from "../../component/SignIn";
import { Typography, withStyles, Button } from "@material-ui/core";
import LinkButton from "../../reusable/LinkButton";
import SignUpContainer from "../../component/SignUp";

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <SignInContainer />
        </header>
        <main className={classes.main}>
          <article className={classes.content}>
            <section>
              <Typography margin="normal" variant="h6" color="textSecondary">
                Participe hoje do Glitch.
              </Typography>
              {/* <LinkButton
                route="/signup"
                children={<Button color="secondary" children="Inscrever-se" />}
              /> */}
            </section>
            <SignUpContainer />
          </article>
        </main>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    height: "100vh"
  },
  header: {
    width: "100%",
    backgroundColor: theme.palette.primary.contrast
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "80%"
  },
  content: {}
});

export default withStyles(styles)(LandingPage);
