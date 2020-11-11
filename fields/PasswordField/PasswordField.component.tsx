import React from "react";

import { Icon } from "@app/components";

import { SharedFieldProps } from "../";
import { Fields } from "../";

import "./PasswordField.scss";

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
  const { className = "", value = "", onChange, htmlFor } = props;

  const [textHidden, setTextHiddden] = React.useState(true);

  const valueClassName = value.length > 0 ? "PasswordField--hasValue" : "";
  const classNames = `PasswordField ${valueClassName} ${className}`;

  return (
    <div className={classNames}>
      <Fields.SingleLine
        type={textHidden ? "password" : "text"}
        value={value}
        htmlFor={htmlFor}
        onChange={(value) => onChange(value)}
      />

      <Icon
        className="PasswordField__Icon"
        name={textHidden ? "eye-slash" : "eye"}
        onClick={() => setTextHiddden(!textHidden)}
      />
    </div>
  );
};

export default PasswordField;