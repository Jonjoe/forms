import React from "react";

import { Text } from "@app/components";
import Form, { FormProps } from "./FormController.component";

const ExampleField: React.FC = (): JSX.Element => {
  const fields: FormProps["fields"] = [
    [
      {
        label: "Field 1",
        inputType: "SingleLine",
        rules: ["isRequired", "isName"],
        value: "",
      },
      {
        label: "Field 2",
        inputType: "SingleLine",
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Field 3",
        inputType: "MultiLine",
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Custom Field",
        component: <p>this is the custom field</p>,
        rules: [],
        value: "",
      },
    ],
    [
      {
        label: "Field 4",
        inputType: "Password",
        rules: ["isRequired"],
        value: "",
      },
      {
        label: "Field 5",
        inputType: "Password",
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Field 11",
        inputType: "SingleLine",
        rules: ["isRequired"],
        value: "",
      },
      {
        label: "Custom Field 2",
        component: <p>this is the custom field</p>,
        rules: [],
        value: "",
      },
    ],
    [
      {
        label: "Field 14",
        inputType: "Checkbox",
        checkboxLabel: <Text.Body>hi</Text.Body>,
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Field 6",
        inputType: "Select",
        rules: [],
        selectOptions: [
          {
            value: "a",
            label: "A",
          },
          {
            value: "b",
            label: "B",
          },
        ],
        value: "",
      },
    ],
    [
      {
        label: "Field 10",
        inputType: "SingleLine",
        rules: ["isRequired"],
        value: "",
      },
    ],
  ];

  return (
    <Form
      fields={fields}
      onSubmit={(formState) => console.log("yay", formState)}
    />
  );
};

export default ExampleField;
