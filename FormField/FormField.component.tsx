import React from "react";

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
  htmlFor: string;
  onChange: (value: string) => void;
  options?: SelectOption[];
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

  return (
    <fieldset className={blockClassName}>
      {label && (
        <Label
          htmlFor={htmlFor}
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
        htmlFor={htmlFor}
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
function buildInputClassNames(blockClassName: string, containsError: boolean) {
  const labelClassName = `${blockClassName}__Input`;

  let classes = labelClassName;
  if (containsError) classes = `${classes} ${labelClassName}--containsError`;

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
function buildLabelClassNames(
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
function processValidators(
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
