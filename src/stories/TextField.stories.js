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
  fontSize: "1rem",
  width: "10rem",
};

export const Textarea = Template.bind({});
Textarea.args = {
  placeholder: `In sit veniam ipsum pariatur nostrud consectetur cupidatat est labore magna esse. Amet consectetur ad proident elit. Ea non velit ex reprehenderit. Quis Lorem dolore est in laboris veniam deserunt aliquip aliquip.

Occaecat labore quis ut esse officia laborum Lorem. Cillum et non ea amet occaecat officia irure aliquip pariatur adipisicing aliqua aliqua. Commodo pariatur dolore qui proident ut. Occaecat mollit qui quis elit esse.`,
  variant: "textarea",
  fontSize: "1rem",
  width: "30rem",
  height: "15rem",
};
