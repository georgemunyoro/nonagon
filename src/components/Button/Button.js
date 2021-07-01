import React from "react";

import "./Button.css";

const Button = ({ label, active, fill, size, color, elevated, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`Button ${elevated && "elevated"} ${size || "large"} ${color} ${active
        ? fill
          ? `active fill`
          : `active no-fill`
        : `disabled`
        }`}
    >
      {label}
    </button>
  );
};

export default Button;
