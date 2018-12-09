import React from "react";
import SignInContainer from "../../component/SignIn";
import { Typography, withStyles, Button } from "@material-ui/core";
import LinkButton from "../../reusable/LinkButton";

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <header className={classes.header}>
          <SignInContainer />
        </header>
        <main className={classes.main}>
          <article className={classes.content}>
            <Typography margin="normal" variant="h5" color="textSecondary">
              Compartilhe seus pensamentos agora
            </Typography>
            <section>
              <Typography margin="normal" variant="h6" color="textSecondary">
                Participe hoje do Glitch.
              </Typography>
              <LinkButton
                route="/signup"
                children={<Button color="secondary" children="Inscrever-se" />}
              />
            </section>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  header: {
    position: "fixed",
    width: "100%"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  content: {
    width: "50%"
  }
});

export default withStyles(styles)(LandingPage);
