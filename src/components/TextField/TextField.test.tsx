import React from "react";
import { render } from "@testing-library/react";
import TextField from "../TextField";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<TextField />);
});
