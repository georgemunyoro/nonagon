import "./Backdrop.css";

import React from "react";
import { v4 as uuidv4 } from "uuid";

interface BackdropProps {
  children?: React.ReactNode;
  onClickAway?: () => void;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const Backdrop = ({
  children,
  onClickAway,
  backgroundColor = "rgba(1,1,1,0.5)",
  style,
}: BackdropProps) => {
  const id = uuidv4();

  const onClickHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const eventTarget = event.target as HTMLElement | null;
    if (eventTarget && eventTarget.classList[0] === id && onClickAway)
      onClickAway();
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
