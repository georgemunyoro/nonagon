import "./Drawer.css";

import React from "react";
import Container from "../Container";
import ClickawayListener from "../ClickawayListener";
import Hidden from "../Hidden";

const Drawer = ({
  position,
  isOpen,
  children,
  onClose,
  size = "20%",
  backgroundColor,
}) => {
  const onCloseHandler = () => {
    onClose();
  };

  let style = {
    backgroundColor,
  };

  if (position === "left" || position === "right") {
    style["width"] = size;
  } else if (position === "bottom" || position === "top") {
    style["height"] = size;
  }

  return (
    <Hidden hidden={!isOpen}>
      <ClickawayListener onClickAway={onCloseHandler}>
        <Container
          style={style}
          classes={[`Drawer ${position} ${isOpen && "isOpen"}`]}
        >
          <Container classes={[`DrawerContainer`]}>{children}</Container>
        </Container>
      </ClickawayListener>
    </Hidden>
  );
};

export default Drawer;
