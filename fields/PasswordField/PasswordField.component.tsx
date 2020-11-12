import React from "react";

import { Icon, Label } from "@app/components";

import { SharedFieldProps } from "../";
import { Fields } from "../";

import "./PasswordField.scss";
import Fieldset from "../Fieldset/Fieldset.component";
import { isError } from "lodash";

/**
 * @name PasswordField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export const PasswordField: React.FC<SharedFieldProps> = (
  props
): JSX.Element => {
  const { className = "", value = "", onChange, label, isErrored } = props;

  const [textHidden, setTextHiddden] = React.useState(true);

  const valueClassName = value.length > 0 ? "PasswordField--hasValue" : "";
  const classNames = `PasswordField ${valueClassName} ${className}`;

  return (
    <Fieldset className={classNames}>
      <Label
        text={label}
        className="PasswordField__Label"
        isErrored={isErrored}
      />

      <input
        type={textHidden ? "password" : "text"}
        id={label}
        className={`PasswordField__Input ${
          isErrored ? "PasswordField__Input--isErrored" : ""
        }`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      <Icon
        className="PasswordField__Icon"
        name={textHidden ? "eye-slash" : "eye"}
        onClick={() => setTextHiddden(!textHidden)}
      />
    </Fieldset>
  );
};

export default PasswordField;
