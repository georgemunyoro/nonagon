import "./Drawer.css";

import React from "react";
import Container from "../Container";

const Drawer = ({ position, isOpen }) => {
  return (
    <Container
      classes={[`Drawer ${position} ${isOpen && "isOpen"}`]}
    ></Container>
  );
};

export default Drawer;
