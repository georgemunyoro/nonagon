import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./ClickawayListener.css";

const ClickawayListener = ({ children, onClickAway }) => {
  const id = uuidv4();

  const onClickHandler = (event) => {
    if (event.target.classList[0] === id) {
      onClickAway();
    }
  };

  return (
    <div className={`${id} ClickawayListener`} onClick={onClickHandler}>
      {children}
    </div>
  );
};

export default ClickawayListener;
