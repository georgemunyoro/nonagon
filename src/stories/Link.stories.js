import React from "react";

import Link from "../components/Link";

export default {
  title: "Components/Link",
  component: Link,
  argtypes: {},
};

const Template = (args) => < Link { ...args }
/>;

export const link = Template.bind({});

link.args = {
  href: `https:/ /
    github.com / georgemunyoro / nucleus`,
  label: "Nucleus Github Repository",
  size: "15px",
};
