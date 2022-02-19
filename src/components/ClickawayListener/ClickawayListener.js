import "./ClickawayListener.css";

import React from "react";
import { v4 as uuidv4 } from "uuid";

const ClickawayListener = ({
  children,
  onClickAway,
  backgroundColor,
  style,
}) => {
  const id = uuidv4();

  const onClickHandler = (event) => {
    if (event.target.classList[0] === id) {
      onClickAway();
    }
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
