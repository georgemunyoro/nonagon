import "./ButtonGroup.css";

import React from "react";

const ButtonGroup = ({ children, vertical, style }) => {
  if (children == null) return <div></div>;

  if (children.length == 1) return children[0];

  return (
    <div style={style} className={`ButtonGroup ${vertical && "vertical"}`}>{children}</div>
  );
};

export default ButtonGroup;
