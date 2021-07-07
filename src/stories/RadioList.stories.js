import React from "react";

import RadioList from "../components/RadioList";

export default {
  title: "Components/Radiolist",
  component: RadioList,
  argtypes: {},
};

const Template = (args) => <RadioList {...args} />;

export const radiolist = Template.bind({});

radiolist.args = {
  data: [
    { label: "Dogs", value: "dogs" },
    { label: "Cats", value: "cats" },
    { label: "Mice", value: "mice" },
    { label: "Pigs", value: "pigs" },
  ],
  horizontal: false,
};
