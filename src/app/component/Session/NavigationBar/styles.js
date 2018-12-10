const styles = ({ palette }) => ({
  root: {
    position: "fixed",
    zIndex: 10,
    backgroundColor: palette.primary.contrast
  },
  toolbar: {
    display: "flex",
    zIndex: 10,
    "& > *": {
      flex: 1
    }
  },
  lateralMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

export default styles;
