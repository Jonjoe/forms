import React from "react";

import FormField from "./FormField.component";

type ExampleFieldProps = {};

const ExampleField: React.FC<ExampleFieldProps> = (): JSX.Element => {
  return (
    <FormField
      label="Example Label"
      validators={[]}
      options={[
        {
          value: "a value",
          label: "a label",
        },
      ]}
      onChange={() => null}
      inputType="SingleLine"
    />
  );
};

export default ExampleField;
