import React from "react";
import { render } from "@testing-library/react";
import ClickawayListener from "../ClickawayListener";

it("renders without crashing", () => {
  render(<ClickawayListener />);
});
