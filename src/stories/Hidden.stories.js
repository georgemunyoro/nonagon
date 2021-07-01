import React from "react"

import Hidden from "../components/Hidden";

export default {
  title: "Components/Hidden",
  component: Hidden,
  argtypes: {},
};

const Template = (args) => <Hidden {...args} />;

export const hidden = Template.bind({});

hidden.args = {
  children: [<p>This text can be hidden</p>],
  hidden: true
};
