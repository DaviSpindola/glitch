import React from "react";

const InProgress = props => (
  <>
    <button>+</button>
    <button>-</button>
    <h1 style={{ color: "white" }}>{props.count}</h1>
  </>
);

InProgress.defaultProps = {
  count: 0
};

export default InProgress;
