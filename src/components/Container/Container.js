import "./Container.css";

import React from "react";

const Container = ({children, style, flex, classes = []}) => {
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
