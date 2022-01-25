import "./Checkbox.css";

import React from "react";

const Checkbox = ({ checked = false, onChange }) => {
  return <input type="checkbox" checked={checked} onChange={onChange}></input>;
};

export default Checkbox;
