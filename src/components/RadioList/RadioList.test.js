import React from "react";
import { render } from "@testing-library/react";
import RadioList from "../RadioList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<RadioList />, div);
});
