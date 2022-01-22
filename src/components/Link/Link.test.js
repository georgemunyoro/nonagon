import React from "react";
import { render } from "@testing-library/react";
import Link from "../Link";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Link />, div);
});
