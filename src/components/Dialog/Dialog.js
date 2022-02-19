import React from "react";
import { Backdrop, Box, Container, Hidden } from "../index";
import "./Dialog.css";

const Dialog = ({
  isOpen = false,
  onClose = () => {},
  children,
  width = "50%",
  height = "initial",
  containerComponentProps,
  hiddenComponentProps,
  backdropComponentProps,
  dialogMessageContainerProps,
  dialogMessageBoxProps,
}) => {
  return (
    <Container {...containerComponentProps}>
      <Hidden hidden={!isOpen} {...hiddenComponentProps}>
        <Backdrop
          {...backdropComponentProps}
          onClickAway={() => {
            onClose();
          }}
        >
          <Container {...dialogMessageContainerProps} style={{ width, height }}>
            <Box {...dialogMessageBoxProps} elevated>
              {children}
            </Box>
          </Container>
        </Backdrop>
      </Hidden>
    </Container>
  );
};

export default Dialog;
