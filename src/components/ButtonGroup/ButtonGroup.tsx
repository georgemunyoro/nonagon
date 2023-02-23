import "./ButtonGroup.css";

import React from "react";

interface ButtonGroupProps {
  children?: React.ReactNode[];
  vertical?: boolean;
  style?: React.CSSProperties;
}

const ButtonGroup = ({
  children,
  vertical,
  style,
}: ButtonGroupProps): React.ReactNode => {
  if (children == null) return null;

  if (children.length == 1) return children[0] || null;

  return (
    <div style={style} className={`ButtonGroup ${vertical && "vertical"}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;
