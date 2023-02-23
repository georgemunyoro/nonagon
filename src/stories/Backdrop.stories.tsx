import React from "react"

import Backdrop from "../components/Backdrop";

export default {
  title: "Components/Backdrop",
  component: Backdrop,
  argtypes: {},
};

const Template = (args) => <Backdrop {...args} />;

export const backdrop = Template.bind({});

backdrop.args = {};
