import React from "react";

import "./Divider.css";

const Divider = ({ color, vertical, height, width, margin }) => {
  if (vertical) {
    return (
      <div
        className="Divider vertical"
        style={{
          height,
          color,
          margin,
        }} />
    )
  }

  return (
    <hr
      style={{
        width,
        color,
        margin,
      }}
      className="Divider" />
  )
};

export default Divider;
