import React from "react";
import { render } from "@testing-library/react";
import Hidden from "../Hidden";

it("renders without crashing", () => {
  render(<Hidden />);
});
