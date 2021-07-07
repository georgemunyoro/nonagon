import React from "react";

import "./Container.css";

const Container = ({ children, style, flex, classes = [] }) => {
  return (
    <div
      style={style}
      className={`Container ${flex && "flex"} ${classes.join("")}`}
    >
      {children}
    </div>
  );
};

export default Container;
