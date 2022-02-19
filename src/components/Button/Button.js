import "./Button.css";

import React from "react";

const Button = ({
  label,
  active,
  fill,
  size,
  color,
  elevated,
  onClick,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={`Button ${elevated && "elevated"} ${
        size || "large"
      } ${color} ${
        active ? (fill ? `active fill` : `active no-fill`) : `disabled`
      }`}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
