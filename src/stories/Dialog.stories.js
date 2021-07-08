import React from "react"

import Dialog from "../components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argtypes: {},
};

const Template = (args) => <Dialog {...args} />;

export const dialog = Template.bind({});

dialog.args = {};
