import "./ClickawayListener.css";

import React from "react";
import { v4 as uuidv4 } from "uuid";

interface ClickawayListenerProps {
  children?: React.ReactNode;
  onClickAway?: () => void;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const ClickawayListener = ({
  children,
  onClickAway,
  backgroundColor,
  style,
}: ClickawayListenerProps) => {
  const id = uuidv4();

  const onClickHandler = (event) => {
    if (event.target.classList[0] === id && onClickAway) onClickAway();
  };

  return (
    <div
      style={{
        backgroundColor,
        ...style,
      }}
      className={`${id} ClickawayListener`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default ClickawayListener;
