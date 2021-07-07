import React from "react";

import Text from "../components/Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    type: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      control: { type: "select" },
      description: "Text tag type to use",
    },
    weight: {
      control: { type: "number" },
      description: "Font Weight",
    },
    size: {
      control: { type: "number" },
      description: "Font Size",
    },
    align: {
      options: ["left", "center", "right", "justify"],
      control: { type: "radio" },
      description: "Text Alignment",
    },
    color: {
      control: { type: "color" },
      description: "Text Color",
    },
    display: {
      options: ["block", "inline"],
      control: { type: "radio" },
      description: "CSS Display Property",
    },
    children: {
      control: { type: "text" },
      description: "Text",
    },
  },
};

const Template = (args) => <Text {...args} />;

export const text = Template.bind({});

text.args = {
  children:
    "Est est enim mollit irure ut ullamco officia in. Nisi quis est cupidatat sit ipsum ut occaecat amet aliqua ad incididunt in anim dolore. Excepteur elit exercitation nostrud amet sunt sint. Et aute quis dolore laborum pariatur incididunt pariatur dolore sunt nostrud adipisicing ea nisi sit. Est dolore laborum est consectetur fugiat consequat aliqua exercitation do ut id sunt. Velit duis esse consectetur elit est dolore. Nisi in culpa aute proident pariatur excepteur.",
  type: "p",
  weight: 200,
  size: 20,
  align: "left",
  color: "black",
  display: "block",
  textWrap: false,
  paragraph: false,
};
