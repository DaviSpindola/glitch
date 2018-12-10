const styles = ({ spacing }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    "& > *": {
      margin: spacing.unit + 2
    },
    "& > button": {
      borderRadius: spacing.unit * 10
    }
  }
});

export default styles;
