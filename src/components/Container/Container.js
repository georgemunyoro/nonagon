import React from "react";

import "./Container.css";

const Container = ({ children, style, flex }) => {
  return <div style={style} className={`Container ${flex && "flex"}`}>{children}</div>;
};

export default Container;
