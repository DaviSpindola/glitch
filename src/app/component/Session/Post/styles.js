const styles = ({ spacing }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px 25px",
    "& > *": {
      margin: spacing.unit
    },
    "& > button": {
      borderRadius: spacing.unit * 10
    }
  },
  dialog: {
    backgroundColor: "#607D8B"
  },
  inputContent: {
    width: "100%"
  },
  postButton: {
    backgroundColor: "#5bbf9c",
    position: "fixed",
    bottom: 15,
    right: 15
  }
});

export default styles;
