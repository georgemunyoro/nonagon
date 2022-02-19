import "./Box.css";

import React from "react";

const Box = ({ children, elevated, style }) => {
  return (
    <div style={style} className={`Box ${elevated && "elevated"}`}>
      {children}
    </div>
  );
};

export default Box;
