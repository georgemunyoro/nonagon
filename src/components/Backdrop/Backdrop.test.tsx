import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Backdrop from ".";

it("renders without crashing", () => {
  render(<Backdrop />);
});

it("renders child components", () => {
  const div = shallow(
    <Backdrop>
      <div>nonagon</div>
    </Backdrop>
  );

  expect(div.containsMatchingElement(<div>nonagon</div>)).toEqual(true);
});
