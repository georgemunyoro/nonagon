import "./Box.css";

import React from "react";

interface BoxProps {
  children?: React.ReactNode;
  elevated?: boolean;
  style?: React.CSSProperties;
}

const Box = ({ children, elevated, style }: BoxProps) => (
  <div style={style} className={`Box ${elevated && "elevated"}`}>
    {children}
  </div>
);

export default Box;
