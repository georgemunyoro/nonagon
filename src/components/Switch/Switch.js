import React from "react";

import "./Switch.css";

const Switch = ({ size, on, onClick }) => {

  const onToggle = event => {
    onClick(event.target.checked);
  };

  return <label class={`Switch ${size || "large"}`}>
    <input onClick={onToggle} className="SwitchInput" type="checkbox" />
    <span class="Switch-slider Switch-round"></span>
  </label>
};

export default Switch;
