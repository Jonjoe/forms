import React from "react";

import { Select } from "@app/components";

import { SharedFieldProps } from "../";

import "./SelectField.scss";

/**
 * @name SelectField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const SelectField: React.FC<SharedFieldProps> = (props): JSX.Element => {
  const { className = "", options = [], onChange } = props;

  const classNames = `SelectField ${className}`;

  return (
    <div className={classNames}>
      <Select options={options} onChange={(newValue) => onChange(newValue)} />
    </div>
  );
};

export default SelectField;