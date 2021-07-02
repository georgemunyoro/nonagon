import React from "react"

import Text from "../components/Text";

export default {
  title: "Components/Text",
  component: Text,
  argtypes: {},
};

const Template = (args) => <Text {...args} />;

export const text = Template.bind({});

text.args = {};
