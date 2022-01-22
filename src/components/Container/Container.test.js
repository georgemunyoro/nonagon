import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Container from "../Container";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Container />, div);
  });
