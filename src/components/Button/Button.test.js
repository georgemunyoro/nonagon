import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Button from "../Button";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Button />, div);
});
