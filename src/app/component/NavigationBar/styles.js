const styles = ({ palette }) => ({
  root: {
    position: "initial",
    zIndex: 10,
    backgroundColor: palette.primary.light
  },
  toolbar: {
    display: "flex",
    zIndex: 10,
    "& > *": {
      flex: 1,
      "& > div": {
        paddingLeft: "20px"
      }
    }
  },
  lateralMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

export default styles;
