import React from "react";
import { render } from "@testing-library/react";
import Container from "../Container";

it("renders without crashing", () => {
  render(<Container />);
});
