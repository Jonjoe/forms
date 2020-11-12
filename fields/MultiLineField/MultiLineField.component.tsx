import React from "react";

import { Label } from "@app/components";

import { SharedFieldProps } from "../";
import Fieldset from "../Fieldset/Fieldset.component";

import "./MultiLineField.scss";
import { isError } from "lodash";

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
  const { className = "", value, onChange, label, isErrored } = props;

  const classNames = `MultiLineField ${className}`;

  return (
    <Fieldset className={classNames}>
      <Label
        text={label}
        className="MultiLineField__Label"
        isErrored={isErrored}
      />

      <textarea
        value={value}
        className={`MultiLineField__Textarea ${
          isErrored ? "MultiLineField__Textarea--isErrored" : ""
        }`}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(event.target.value)
        }
      />
    </Fieldset>
  );
};

export default MultiLineField;
