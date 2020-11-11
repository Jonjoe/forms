import React from "react";

import { SharedFieldProps } from "../";

import "./CheckboxField.scss";

/**
 * @name CheckboxField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const CheckboxField: React.FC<SharedFieldProps> = (props): JSX.Element => {
  const { className = "", onChange, htmlFor, checkboxLabel } = props;

  const [checked, setChecked] = React.useState(false);

  const classNames = `CheckboxField ${className}`;

  return (
    <div className={classNames}>
      <input
        className="Checkbox__Input"
        id={htmlFor}
        onClick={() => {
          onChange(String(!checked));
          setChecked(!checked);
        }}
        type="checkbox"
      />

      {checkboxLabel}
    </div>
  );
};

export default CheckboxField;
