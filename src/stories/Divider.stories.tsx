import React from "react";

import Divider from "../components/Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argtypes: {},
};

const Template = (args) => <Divider {...args} />;

export const divider = Template.bind({});

divider.args = {
  vertical: false,
  height: "",
  width: "",
  margin: "",
};
