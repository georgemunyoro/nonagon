import "./Box.css";

import React from "react";

const Box = ({children, elevated}) => {
  return <div className={`Box ${elevated && "elevated"}`}>{children}</div>;
};

export default Box;
