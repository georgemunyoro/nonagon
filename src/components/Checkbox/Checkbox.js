import "./Checkbox.css";

import React from "react";

const Checkbox = ({ checked = false, style }) => {
  return <input style={style} type="checkbox"></input>;
};

export default Checkbox;
