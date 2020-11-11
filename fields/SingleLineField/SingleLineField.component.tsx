import React from "react";

import { SharedFieldProps } from "../";
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
  const { className = "", value, onChange, type, htmlFor } = props;

  const classNames = `SingleLineField ${className}`;

  return (
    <input
      className={classNames}
      type={type}
      id={htmlFor}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default SingleLineField;
