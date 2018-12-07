import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#10171e",
      light: "#181c24"
    },
    secondary: {
      main: "#5bbf9c",
      light: "#7FDBB6"
    },
    text: {
      primary: "#fff"
    },
    divider: "#BDBDBD"
  }
});

export default theme;
