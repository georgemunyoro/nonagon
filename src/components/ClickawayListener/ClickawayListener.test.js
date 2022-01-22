import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import ClickawayListener from "../ClickawayListener";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ClickawayListener />, div);
});
