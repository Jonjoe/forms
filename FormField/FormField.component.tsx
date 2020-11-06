import React from "react";
import { v4 as uuid } from "uuid";

import { Label, Errors } from "@app/components";
import { SelectOption } from "@app/components/core/molecules/Select/Select.component";

import { Inputs, InputProps } from "../fieldTypes";

import { ValidationRule } from "..";
import "./FormField.scss";

export type FormInput =
  | "SingleLine"
  | "MultiLine"
  | "Password"
  | "Select"
  | "Checkbox";

export type FormFieldProps = {
  inputType: FormInput;
  label?: string;
  htmlFor?: string;
  options?: SelectOption[];
  onChange: (value: string) => void;
  validators: ValidationRule[];
};

/**
 * @name FormField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const FormField: React.FC<FormFieldProps> = (props): JSX.Element => {
  const { inputType, label, htmlFor, validators, options, onChange } = props;

  const blockClassName = "FormField";

  const [fieldState, setFieldState] = React.useState({
    value: "",
    isDirty: false,
    errors: [] as string[],
  });

  const FieldComponent: React.FC<InputProps> = Inputs[inputType];
  const checkboxClassname =
    inputType === "Checkbox" ? "FormField--isCheckbox" : "";

  const id = htmlFor || label || uuid();

  return (
    <fieldset className={`${blockClassName} ${checkboxClassname}`}>
      {label && (
        <Label
          htmlFor={id}
          text={label}
          className={buildLabelClassNames(
            blockClassName,
            fieldState.value.length > 0,
            fieldState.errors.length > 0,
            fieldState.isDirty
          )}
        />
      )}

      <FieldComponent
        value={fieldState.value}
        htmlFor={id}
        options={options}
        className={buildInputClassNames(
          blockClassName,
          fieldState.errors.length > 0
        )}
        onChange={(value) => {
          onChange(value);
          setFieldState({
            ...fieldState,
            errors: processValidators(validators, value),
            value,
          });
        }}
      />

      <Errors errorList={fieldState.errors} />
    </fieldset>
  );
};

/**
 * Generate input classnames
 * @param  {string} blockClassName Component Block Classname.
 * @param  {boolean} containsError True if the field has an error..
 * @returns {string}
 */
export function buildInputClassNames(
  blockClassName: string,
  containsError: boolean
) {
  const inputClassName = `${blockClassName}__Input`;

  let classes = inputClassName;
  if (containsError) classes = `${classes} ${inputClassName}--containsError`;

  return classes;
}

/**
 * Generate label classnames
 * @param  {string} blockClassName Component Block Classname.
 * @param  {boolean} containsValue True if the field has a value..
 * @param  {boolean} containsError True if the field has an error..
 * @param  {boolean} isDirty True if the field has been touched.
 * @returns {string}
 */
export function buildLabelClassNames(
  blockClassName: string,
  containsValue: boolean,
  containsError: boolean,
  isDirty: boolean
) {
  const labelClassName = `${blockClassName}__Label`;

  let classes = labelClassName;

  if (containsValue) classes = `${classes} ${labelClassName}--containsValue`;
  if (containsError) classes = `${classes} ${labelClassName}--containsError`;
  if (isDirty) classes = `${classes} ${labelClassName}--isDirty`;

  return classes;
}

/**
 * Process the validation rules
 * @param  {array} validators The list of validator rules to use.
 * @param  {string} value The value the validation rules will run against.
 * @returns {array}
 */
export function processValidators(
  validators: ValidationRule[],
  value: string
): string[] {
  const errorMessages: string[] = [];

  validators.forEach((validator) => {
    if (validator.rule(value)) return null;

    errorMessages.push(validator.message);
  });

  return errorMessages;
}

export default FormField;
