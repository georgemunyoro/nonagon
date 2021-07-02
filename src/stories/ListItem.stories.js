import React from "react"

import ListItem from "../components/ListItem";

export default {
  title: "Components/ListItem",
  component: ListItem,
  argtypes: {},
};

const Template = (args) => <ListItem {...args} />;

export const listitem = Template.bind({});

listitem.args = {};
