import React from "react";

import "./Hidden.css";

const Hidden = ({ children, hidden }) => {
  return <div className={`Hidden ${hidden && "hidden"}`}>{children}</div>
};

export default Hidden;
