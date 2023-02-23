import "./Hidden.css";

import React from "react";

interface HiddenProps {
  children?: React.ReactNode;
  hidden?: boolean;
}

const Hidden = ({ children, hidden }: HiddenProps) => {
  return <div className={`Hidden ${hidden && "hidden"}`}>{children}</div>;
};

export default Hidden;
