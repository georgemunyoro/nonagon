import React from "react";
import { render } from "@testing-library/react";
import Drawer from "../Drawer";

it("renders without crashing", () => {
  render(<Drawer />);
});
