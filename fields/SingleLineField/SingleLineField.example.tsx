import React from "react";
import { SingleLineField } from "./SingleLineField.component";

const Example: React.FC<{
  isErrored?: boolean;
  errorText?: "";
}> = (props) => {
  const [value, setValue] = React.useState("Default input value");

  return (
    <SingleLineField
      type="text"
      htmlFor="text"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export default Example;
