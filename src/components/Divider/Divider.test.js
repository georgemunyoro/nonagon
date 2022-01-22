import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Divider from "../Divider";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Divider />, div);
});
