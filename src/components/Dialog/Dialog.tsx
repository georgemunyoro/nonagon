import React from "react";
import { Backdrop, Box, Container, Hidden } from "../index";
import "./Dialog.css";

interface DialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  containerComponentProps?: React.HTMLAttributes<HTMLDivElement>;
  hiddenComponentProps?: React.HTMLAttributes<HTMLDivElement>;
  backdropComponentProps?: React.HTMLAttributes<HTMLDivElement>;
  dialogMessageContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  dialogMessageBoxProps?: React.HTMLAttributes<HTMLDivElement>;
}

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
}: DialogProps) => (
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

export default Dialog;
