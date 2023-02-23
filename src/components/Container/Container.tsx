import "./Container.css";

import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  flex?: boolean;
  classes?: string[];
}

const Container = ({ children, style, flex, classes = [] }: ContainerProps) => (
  <div
    style={style}
    className={`Container ${flex && "flex"} ${classes.join("")}`}
  >
    {children}
  </div>
);

export default Container;
