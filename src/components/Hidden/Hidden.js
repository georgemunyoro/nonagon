import "./Hidden.css";

import React from "react";

const Hidden = ({ children, hidden }) => {
  return <div className={`Hidden ${hidden && "hidden"}`}>{children}</div>;
};

export default Hidden;
