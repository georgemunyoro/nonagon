import React from "react";
import { render } from "@testing-library/react";
import ListItem from "../ListItem";

it("renders without crashing", () => {
  render(<ListItem />);
});
