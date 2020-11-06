import React from "react";

import CheckboxField from "./CheckboxField.component";

const Example: React.FC = (props) => {
  const [checked, setChecked] = React.useState("");

  return (
    <CheckboxField
      onChange={(checked) => setChecked(checked)}
      value={checked}
      htmlFor="example"
    />
  );
};

export default Example;
