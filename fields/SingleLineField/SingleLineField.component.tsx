import React from "react";

import { Label } from "@app/components";

import { SharedFieldProps, Fieldset } from "../";

import "./SingleLineField.scss";

/**
 * @name SingleLineField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export const SingleLineField: React.FC<SharedFieldProps> = (
  props
): JSX.Element => {
  const { value, onChange, type, label, isErrored } = props;

  return (
    <Fieldset className="SingleLineField">
      <Label
        text={label}
        className="SingleLineField__Label"
        isErrored={isErrored}
      />

      <input
        id={label}
        type={type}
        className={`SingleLineField__Input ${
          isErrored ? "SingleLineField__Input--isErrored" : ""
        }`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Fieldset>
  );
};

export default SingleLineField;
