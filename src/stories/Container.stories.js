import React from "react";
import Container from "../components/Container";

export default {
  title: "Components/Container",
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const container = Template.bind({});

container.args = {
  color: "primary",
  elevated: false,
  children: [
    <p>
      Ex aliqua nulla deserunt in elit Lorem nisi velit exercitation consequat
      eiusmod anim. Mollit ipsum id do proident. Voluptate cupidatat minim
      exercitation nulla veniam mollit quis ut reprehenderit eu.
    </p>,
  ],
};
