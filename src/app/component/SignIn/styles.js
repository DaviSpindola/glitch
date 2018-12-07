const styles = ({ spacing }) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    "& > *": {
      margin: spacing.unit
    },
    "& > button": {
      borderRadius: spacing.unit * 10
    }
  }
});

export default styles;
