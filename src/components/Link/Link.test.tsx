import React from "react";
import { render } from "@testing-library/react";
import Link from "../Link";

it("renders without crashing", () => {
  render(<Link href="https://example.com" label="example.com" />);
});
