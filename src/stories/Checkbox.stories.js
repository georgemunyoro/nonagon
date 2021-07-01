import React from "react";
import Checkbox from "../components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      type: "boolean"
    }
  }
}

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  checked: false,
};
