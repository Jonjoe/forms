import React from "react";

import { Label, Select } from "@app/components";

import { Fieldset, SharedFieldProps } from "../";

import "./SelectField.scss";

/**
 * @name SelectField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const SelectField: React.FC<SharedFieldProps> = (props): JSX.Element => {
  const { options = [], onChange, label } = props;

  return (
    <Fieldset className="SelectField">
      <Label text={label} className="SelectField__Label" />
      <Select options={options} onChange={(newValue) => onChange(newValue)} />
    </Fieldset>
  );
};

export default SelectField;
