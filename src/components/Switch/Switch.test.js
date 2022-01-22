import React from "react";
import { render } from "@testing-library/react";
import Switch from "../Switch";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Switch />, div);
});
