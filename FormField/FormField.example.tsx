import React from "react";

import FormField from "./FormField.component";

type ExampleFieldProps = {};

const ExampleField: React.FC<ExampleFieldProps> = (): JSX.Element => {
  return (
    <FormField
      htmlFor="examplefor"
      label="Example Label"
      validators={[]}
      options={[
        {
          value: "a value",
          label: "a label",
        },
      ]}
      inputType="SingleLine"
    />
  );
};

export default ExampleField;
