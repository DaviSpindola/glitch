import React from "react";

const Actions = ({ onChange }) => (
  <input
    type="file"
    name="media"
    accept="image/*"
    onChange={onChange}
    multiple
  />
);

export default Actions;
