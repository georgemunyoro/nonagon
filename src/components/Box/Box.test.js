import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Box from "../Box";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Box />, div);
});
