import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import ButtonGroup from "../ButtonGroup";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ButtonGroup />, div);
});
