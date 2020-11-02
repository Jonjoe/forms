import React from "react";
import { PasswordField } from "./PasswordField.component";

const Example: React.FC<{}> = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <PasswordField
      value={value}
      htmlFor={"passwordField"}
      onChange={(value) => setValue(value)}
    />
  );
};

export default Example;
