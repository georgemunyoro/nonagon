import "./Drawer.css";

import React from "react";

import ClickawayListener from "../ClickawayListener";
import Container from "../Container";
import Hidden from "../Hidden";

const Drawer = ({
  position,
  isOpen,
  children,
  onClose,
  size = "20%",
  backgroundColor,
  style,
  hiddenComponentProps,
  clickawayListenerComponentProps,
  drawerContentContainerProps,
  drawerContainerProps,
}) => {
  const onCloseHandler = () => {
    onClose();
  };

  style = {
    backgroundColor,
    ...style,
  };

  if (position === "left" || position === "right") {
    style["width"] = size;
  } else if (position === "bottom" || position === "top") {
    style["height"] = size;
  }

  return (
    <Hidden {...hiddenComponentProps} hidden={!isOpen}>
      <ClickawayListener
        {...clickawayListenerComponentProps}
        onClickAway={onCloseHandler}
      >
        <Container
          {...drawerContainerProps}
          style={style}
          classes={[`Drawer ${position} ${isOpen && "isOpen"}`]}
        >
          <Container
            {...drawerContentContainerProps}
            classes={[`DrawerContainer`]}
          >
            {children}
          </Container>
        </Container>
      </ClickawayListener>
    </Hidden>
  );
};

export default Drawer;
