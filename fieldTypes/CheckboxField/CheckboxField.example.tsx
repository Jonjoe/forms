import React from "react";

import CheckboxField from "./CheckboxField.component";

const Example: React.FC = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <CheckboxField
      onChange={() => null}
      checked={checked}
      htmlFor="example"
      onCheck={(checked) => setChecked(checked)}
    />
  );
};

export default Example;
