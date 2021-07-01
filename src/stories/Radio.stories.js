import React from "react"

import Radio from "../components/Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argtypes: {},
};

const Template = (args) => <Radio {...args} />;

export const radio = Template.bind({});

radio.args = {};
