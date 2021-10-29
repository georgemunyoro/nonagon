import React from "react";

import { Dialog, Button, Text, ButtonGroup, Divider } from "../components";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argtypes: {},
};

const Template = (args) => <Dialog {...args} />;

export const dialog = Template.bind({});

dialog.args = {
  children: [
    <Text type="h1">Hello, World!</Text>,
    <Divider />,
    <Text>
      Exercitation sit qui culpa velit duis labore amet Lorem enim ex voluptate
      sit. Ex veniam id consequat minim non ex deserunt. Quis dolore sint quis
      commodo. Amet anim qui amet sit commodo. Lorem mollit ut nostrud occaecat
      aute Lorem in. Id cupidatat exercitation consequat in ex nisi dolore.
      Irure veniam amet eiusmod incididunt eu elit deserunt consectetur non
      magna Lorem reprehenderit ea. Sint et ipsum voluptate excepteur ipsum.
      Laboris ipsum ipsum nostrud irure aliquip sit eiusmod.
    </Text>,
    <Divider />,
    <ButtonGroup>
      <Button label="Ipsum" color="emerald" />
      <Button label="Lorem" />
    </ButtonGroup>,
  ],
  isOpen: true,
  width: "50%",
  height: "initial",
};
