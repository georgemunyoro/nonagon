import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Dialog from "../Dialog";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Dialog />, div);
});
