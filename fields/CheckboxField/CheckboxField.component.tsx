import React from "react";

import { SharedFieldProps, Fieldset } from "../";

import "./CheckboxField.scss";

/**
 * @name CheckboxField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const CheckboxField: React.FC<SharedFieldProps> = (props): JSX.Element => {
  const { className = "", onChange, label, checkboxLabel, isErrored } = props;

  const [checked, setChecked] = React.useState(false);

  const classNames = `CheckboxField ${className}`;

  return (
    <Fieldset className={classNames}>
      <input
        className={`CheckboxField__Input ${
          isErrored ? "CheckboxField__Input--isErrored" : ""
        }`}
        id={label}
        onClick={() => {
          onChange(String(!checked));
          setChecked(!checked);
        }}
        type="checkbox"
      />

      <label className="CheckboxField__Label" htmlFor={label}>
        {checkboxLabel}
      </label>
    </Fieldset>
  );
};

export default CheckboxField;
