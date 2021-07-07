import "./Link.css";

import React from "react";

const Link = ({ href, label, color, size }) => {
  const style = { color, fontSize: size };
  return (
    <a className={`Link`} href={href} style={style}>
      {label}
    </a>
  );
};

export default Link;
