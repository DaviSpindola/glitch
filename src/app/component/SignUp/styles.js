const styles = ({ spacing }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    height: "100vh",
    "& > *": {
      margin: spacing.unit
    },
    "& > button": {
      borderRadius: spacing.unit * 10
    }
  }
});

export default styles;
