import React from "react";

import { InputProps } from "../";

import "./CheckboxField.scss";

/**
 * @name CheckboxField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const CheckboxField: React.FC<InputProps> = (props): JSX.Element => {
  const { className = "", onChange, htmlFor } = props;

  const [checked, setChecked] = React.useState(false);

  const classNames = `CheckboxField ${className}`;

  return (
    <input
      className={classNames}
      id={htmlFor}
      onClick={() => {
        onChange(String(!checked));
        setChecked(!checked);
      }}
      type="checkbox"
    />
  );
};

export default CheckboxField;
