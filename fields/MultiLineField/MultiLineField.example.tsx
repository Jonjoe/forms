import React from "react";

import MultiLineField from "./MultiLineField.component";

const Example: React.FC = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <MultiLineField
      value={value}
      htmlFor="example"
      onChange={(value) => setValue(value)}
    />
  );
};

export default Example;
