import "./Button.css";

import React from "react";

interface ButtonProps {
  label?: string;
  active?: boolean;
  fill?: boolean;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary";
  elevated?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({
  label,
  active,
  fill,
  size,
  color,
  elevated,
  onClick,
  style,
}: ButtonProps) => {
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
