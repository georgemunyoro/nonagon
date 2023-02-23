import React from "react";
import { render } from "@testing-library/react";
import Text from "../Text";

it("renders without crashing", () => {
  render(<Text />);
});
