import React from "react";
import renderer from "react-test-renderer";

import {
  buildLabelClassNames,
  buildInputClassNames,
  // processValidators,
} from "./FormField.component";

import Example from "./FormField.example";

test("FormField renders correctly", () => {
  const component = renderer.create(<Example />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

describe("FormField functions", () => {
  describe("buildLabelClassNames()", () => {
    test("if the field is untouched", () => {
      const expectedResult = "ClassName__Label";
      const actualResult = buildLabelClassNames(
        "ClassName",
        false,
        false,
        false
      );

      expect(actualResult).toBe(expectedResult);
    });

    test("if the field has a value", () => {
      const expectedResult = "ClassName__Label ClassName__Label--containsValue";
      const actualResult = buildLabelClassNames(
        "ClassName",
        true,
        false,
        false
      );

      expect(actualResult).toBe(expectedResult);
    });

    test("if the field contains an error", () => {
      const expectedResult = "ClassName__Label ClassName__Label--containsError";
      const actualResult = buildLabelClassNames(
        "ClassName",
        false,
        true,
        false
      );

      expect(actualResult).toBe(expectedResult);
    });

    test("if the field has been touched", () => {
      const expectedResult = "ClassName__Label ClassName__Label--isDirty";
      const actualResult = buildLabelClassNames(
        "ClassName",
        false,
        false,
        true
      );

      expect(actualResult).toBe(expectedResult);
    });

    test("if all the conditions are met", () => {
      const expectedResult =
        "ClassName__Label ClassName__Label--containsValue ClassName__Label--containsError ClassName__Label--isDirty";
      const actualResult = buildLabelClassNames("ClassName", true, true, true);

      expect(actualResult).toBe(expectedResult);
    });

    test("if all but one of the conditions are met", () => {
      const expectedResult =
        "ClassName__Label ClassName__Label--containsValue ClassName__Label--isDirty";
      const actualResult = buildLabelClassNames("ClassName", true, false, true);

      expect(actualResult).toBe(expectedResult);
    });
  });

  describe("buildInputClassNames()", () => {
    test("if the field is untouched", () => {
      const expectedResult = "ClassName__Input";
      const actualResult = buildInputClassNames("ClassName", false);

      expect(actualResult).toBe(expectedResult);
    });

    test("if the field contains an error", () => {
      const expectedResult = "ClassName__Input ClassName__Input--containsError";
      const actualResult = buildInputClassNames("ClassName", true);

      expect(actualResult).toBe(expectedResult);
    });
  });
});
