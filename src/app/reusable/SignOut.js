import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

import { auth } from "../../firebase";

const SignOut = ({ history }) => {
  const handleSignOut = () => {
    auth.doSignOut().then(() => {
      history.push("/landing");
    });
  };

  return <Button onClick={handleSignOut}>Sair</Button>;
};

export default withRouter(SignOut);
