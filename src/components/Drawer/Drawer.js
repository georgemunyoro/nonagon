import "./Drawer.css";

import React from "react";
import Container from "../Container";
import ClickawayListener from "../ClickawayListener";
import Hidden from "../Hidden";

const Drawer = ({ position, isOpen, children, onClose }) => {
  const onCloseHandler = () => {
    onClose();
  };

  return (
    <Hidden hidden={!isOpen}>
      <ClickawayListener onClickAway={onCloseHandler}>
        <Container classes={[`Drawer ${position} ${isOpen && "isOpen"}`]}>
          <Container classes={[`DrawerContainer`]}>{children}</Container>
        </Container>
      </ClickawayListener>
    </Hidden>
  );
};

export default Drawer;
