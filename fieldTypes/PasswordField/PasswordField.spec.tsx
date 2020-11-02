import React from "react";
import renderer from "react-test-renderer";

import PasswordField from "./PasswordField.component";

test("PasswordField renders correctly", () => {
  const component = renderer.create(
    <PasswordField>
      <p>child component</p>
    </PasswordField>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
