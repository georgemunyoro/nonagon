import React from "react";

import Switch from "../components/Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    size: {
      options: [ "tiny", "small", "medium", "large" ],
      control: {type: "select"},
    },
    label: {
      control: {type: "text"},
    },
  },
};

const Template = (args) => < Switch { ...args }
/>;

export const switch_ = Template.bind({});

switch_.args = {
  size: "medium",
  label: "Switch",
};
