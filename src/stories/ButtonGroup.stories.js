import React from "react";

import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";

export default {
  title: "Components/Buttongroup",
  component: ButtonGroup,
  argtypes: {},
};

const Template = (args) => <ButtonGroup {...args} />;

export const Horizontal = Template.bind({});
export const Vertical = Template.bind({});

Horizontal.args = {
  children: [
    <Button label="Button 1" />,
    <Button label="Button 2" />,
    <Button label="Button 3" />,
  ],
};

Vertical.args = {
  vertical: true,
  children: [
    <Button label="Button 1" />,
    <Button label="Button 2" />,
    <Button label="Button 3" />,
  ],
};
