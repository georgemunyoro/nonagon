import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Backdrop from "../Backdrop";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Backdrop />, div);
});

it("renders child components", () => {
  const div = shallow(
    <Backdrop>
      <div>nonagon</div>
    </Backdrop>
  );

  expect(div.containsMatchingElement(<div>nonagon</div>)).toEqual(true);
});
