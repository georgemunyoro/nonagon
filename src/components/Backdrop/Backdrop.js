import "./Backdrop.css";

import React from "react";
import { v4 as uuidv4 } from "uuid";

const Backdrop = ({
  children,
  onClickAway,
  backgroundColor = "rgba(1,1,1,0.5)",
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
      className={`${id} Backdrop`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default Backdrop;
