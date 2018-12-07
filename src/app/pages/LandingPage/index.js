import React from "react";
import SignInContainer from "../../component/SignIn";
import { Typography, withStyles, Button } from "@material-ui/core";
import LinkButton from "../../reusable/LinkButton";

const LandingPage = ({ classes }) => (
  <React.Fragment>
    <header className={classes.header}>
      <SignInContainer />
    </header>
    <main className={classes.main}>
      <article className={classes.content}>
        <Typography margin="normal" variant="h5" color="textSecondary">
          Veja o que está acontecendo no mundo agora
        </Typography>
        <section>
          <Typography margin="normal" variant="h6" color="textSecondary">
            Participe hoje do Twitter.
          </Typography>
          <LinkButton
            route="/signup"
            children={<Button children="Inscrever-se" />}
          />
        </section>
      </article>
    </main>
  </React.Fragment>
);

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
