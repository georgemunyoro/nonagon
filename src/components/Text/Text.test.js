import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Text from "../Text";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Text />, div);
});
