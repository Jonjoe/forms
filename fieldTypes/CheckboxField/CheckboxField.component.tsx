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
  const { className = "", children } = props;

  const classNames = `CheckboxField ${className}`;

  return (
    <div className={classNames}>
      <input className="CheckboxField__Input" type="checkbox" />
      <div className="CheckboxField__Text">{children}</div>
    </div>
  );
};

export default CheckboxField;
