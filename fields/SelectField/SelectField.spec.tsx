import React from "react";
import renderer from "react-test-renderer";

import SelectField from "./SelectField.component";

test("SelectField renders correctly", () => {
  const component = renderer.create(
    <SelectField
      onChange={() => null}
      value=""
      htmlFor=""
      options={[
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" },
      ]}
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
