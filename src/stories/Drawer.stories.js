import React from "react";

import Drawer from "../components/Drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
  argtypes: {},
};

const Template = (args) => <Drawer {...args} />;

export const drawer = Template.bind({});

drawer.args = {
  isOpen: false,
  position: "top",
  size: "50px",
};
