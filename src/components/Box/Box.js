import React from "react";

import "./Box.css";

const Box = ({ children, elevated }) => {
  return (
    <div
      className={`Box ${elevated && "elevated"}`}>
      {children}
    </div>
  )
}

export default Box;
