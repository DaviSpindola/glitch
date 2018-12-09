const styles = ({ palette }) => ({
  root: {
    width: 300,
    padding: 10
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: "10px 0"
    }
  }
});

export default styles;
