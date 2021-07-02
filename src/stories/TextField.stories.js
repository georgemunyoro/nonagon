import React from "react"

import TextField from "../components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argtypes: {},
};

const Template = (args) => <TextField {...args} />;

export const textfield = Template.bind({});

textfield.args = {};
