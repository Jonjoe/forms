import React from "react";
import renderer from "react-test-renderer";

import Example from "./FormField.example";

test("FormField renders correctly", () => {
  const component = renderer.create(<Example />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
