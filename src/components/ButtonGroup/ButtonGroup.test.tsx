import React, { JSXElementConstructor } from "react";
import { render } from "@testing-library/react";
import ButtonGroup from "../ButtonGroup";

it("renders without crashing", () => {
  render(<ButtonGroup />);
});
