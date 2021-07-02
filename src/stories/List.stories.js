import React from "react"

import List from "../components/List";
import ListItem from "../components/ListItem";

export default {
  title: "Components/List",
  component: List,
  argtypes: {},
};

const Template = (args) => <List {...args} />;

export const list = Template.bind({});

list.args = {
  children: [
    <ListItem label="Single-line item" secondaryText="Secondary Text"><div>3</div></ListItem>,
    <ListItem>1</ListItem>,
    <ListItem>2</ListItem>,
  ],
  ordered: false,
  plain: false,
  dense: false,
};
