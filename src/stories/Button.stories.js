import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: [ "large", "medium", "small", "tiny" ],
      control: {type: "radio"},
    },
    color: {
      options: [ "primary", "emerald", "red", "yellow", "orange" ],
      control: {type: "select"},
    },
    elevated: {
      control: {type: "boolean"},
    },
  },
};

const Template = (args) => < Button { ...args }
/>;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Tiny = Template.bind({});

Large.args = {
  label: "Button",
  size: "large",
  color: "primary",
  elevated: false,
};

Medium.args = {
  label: "Button",
  size: "medium",
  color: "primary",
  elevated: false,
};

Small.args = {
  label: "Button",
  size: "small",
  color: "primary",
  elevated: false,
};

Tiny.args = {
  label: "Button",
  size: "tiny",
  color: "primary",
  elevated: false,
};
