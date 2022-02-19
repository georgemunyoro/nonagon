import React from "react";
import "./Link.css";

const Link = ({ href, label, color, size: fontSize, style }) => (
  <a className={`Link`} href={href} style={{ color, fontSize, ...style }}>
    {label}
  </a>
);

export default Link;
