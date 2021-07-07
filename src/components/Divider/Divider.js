import "./Divider.css";

import React from "react";

const Divider = ({color, vertical, height, width, margin}) => {
  if (vertical) {
    return (
      <div
        className="Divider vertical"
        style={{
          height,
          color,
          margin,
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
      }}
      className="Divider"
    />
  );
};

export default Divider;
