import "./Drawer.css";

import React from "react";

import ClickawayListener from "../ClickawayListener";
import Container from "../Container";
import Hidden from "../Hidden";

interface DrawerProps {
  position?: "left" | "right" | "top" | "bottom";
  isOpen?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  size?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
  hiddenComponentProps?: any;
  clickawayListenerComponentProps?: any;
  drawerContentContainerProps?: any;
  drawerContainerProps?: any;
}

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
}: DrawerProps) => {
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
        onClickAway={onClose}
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
