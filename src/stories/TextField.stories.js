import React from "react";

import TextField from "../components/TextField";

export default {
  title: "Components/Textfield",
  component: TextField,
  argtypes: {},
};

const Template = (args) => <TextField {...args} />;

export const Input = Template.bind({});
Input.args = {
  placeholder: "Basic Input",
  value: "andom",
  fontSize: "100px",
};

export const Textarea = Template.bind({});
Textarea.args = {
  variant: "textarea",
};
