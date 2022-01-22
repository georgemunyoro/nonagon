import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Checkbox from "../Checkbox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Checkbox />, div);
});
