import "./Container.css";

import React from "react";

const Container = ({ children, style, flex }) => {
  return (
    <div style={style} className={`Container ${flex && "flex"}`}>
      {children}
    </div>
  );
};

export default Container;
