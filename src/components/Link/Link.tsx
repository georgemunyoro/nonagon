import React from "react";
import "./Link.css";

interface LinkProps {
  href: string;
  label: string;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Link = ({ href, label, color, size: fontSize, style }: LinkProps) => (
  <a className={`Link`} href={href} style={{ color, fontSize, ...style }}>
    {label}
  </a>
);

export default Link;
