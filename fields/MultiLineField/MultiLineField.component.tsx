import React from "react";

import { SharedFieldProps } from "../";

import "./MultiLineField.scss";

/**
 * @name MultiLineField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export const MultiLineField: React.FC<SharedFieldProps> = (
  props
): JSX.Element => {
  const { className = "", value, onChange } = props;

  const classNames = `MultiLineField  ${className}`;

  return (
    <textarea
      className={classNames}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
        onChange(event.target.value)
      }
    />
  );
};

export default MultiLineField;
