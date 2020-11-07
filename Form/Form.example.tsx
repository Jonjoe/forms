import React from "react";

import Form from "./Form.component";

const ExampleField: React.FC = (): JSX.Element => {
  return (
    <Form
      onSubmit={(formData) => console.log(formData)}
      primaryButtonText="Sign Up"
      secondaryButtonText="Login"
      secondaryButtonOnClick={() => null}
      fields={[
        [
          {
            label: "Username/Password",
            initialValue: "",
            isRequired: true,
            validators: [],
            inputType: "SingleLine",
          },
        ],
        [
          {
            label: "Password",
            initialValue: "",
            isRequired: true,
            validators: [],
            inputType: "Password",
          },
        ],
        [
          {
            label: "Remember Me",
            initialValue: "",
            isRequired: false,
            validators: [],
            inputType: "Checkbox",
          },
        ],
      ]}
    />
  );
};

export default ExampleField;
