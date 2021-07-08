import React from "react";

import "./Dialog.css";

import { Container, Hidden, Backdrop, Box } from "../index";

const Dialog = ({
  isOpen = false,
  onClose = () => {},
  children,
  width = "50%",
  height = "initial",
}) => {
  return (
    <Container>
      <Hidden hidden={!isOpen}>
        <Backdrop
          onClickAway={() => {
            onClose();
          }}
        >
          <Container style={{ width, height }}>
            <Box elevated>{children}</Box>
          </Container>
        </Backdrop>
      </Hidden>
    </Container>
  );
};

export default Dialog;
