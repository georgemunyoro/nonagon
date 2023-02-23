import "./Divider.css";

import React from "react";

interface DividerProps {
  color?: string;
  vertical?: boolean;
  height?: string;
  width?: string;
  margin?: string;
  style?: React.CSSProperties;
}

const Divider = ({
  color,
  vertical,
  height,
  width,
  margin,
  style,
}: DividerProps) => {
  if (vertical) {
    return (
      <div
        className="Divider vertical"
        style={{
          height,
          color,
          margin,
          ...style,
        }}
      />
    );
  }

  return (
    <hr
      style={{
        width,
        color,
        margin,
        ...style,
      }}
      className="Divider"
    />
  );
};

export default Divider;
