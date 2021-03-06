import "./Divider.css";

import React from "react";

const Divider = ({ color, vertical, height, width, margin, style }) => {
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
