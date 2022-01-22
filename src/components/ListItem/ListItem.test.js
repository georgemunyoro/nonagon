import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import ListItem from "../ListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ListItem />, div);
});
