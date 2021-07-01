import React from "react";

import "./ButtonGroup.css";

const ButtonGroup = ({ children, vertical }) => {
  if (children.length == 1) return children[0]

  return <div className={`ButtonGroup ${vertical && "vertical"}`}>
    {children}
  </div>
};

export default ButtonGroup;
