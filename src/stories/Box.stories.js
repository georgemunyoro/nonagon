import React from "react";
import Box from "../components/Box/Box";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    color: {
      options: ["primary", "emerald", "red", "yellow", "orange"],
      control: { type: "select" }
    },
    elevated: {
      control: { type: "boolean" }
    }
  }
};

const Template = (args) => <Box {...args} />

export const box = Template.bind({});

box.args = {
  color: "primary",
  elevated: false,
  children: [<p>Ex aliqua nulla deserunt in elit Lorem nisi velit exercitation consequat eiusmod anim. Mollit ipsum id do proident. Voluptate cupidatat minim exercitation nulla veniam mollit quis ut reprehenderit eu.</p>]
}
