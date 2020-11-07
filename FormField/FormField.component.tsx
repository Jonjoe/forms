import React from "react";
import { v4 as uuid } from "uuid";

import { Label, Errors } from "@app/components";
import { SelectOption } from "@app/components/core/molecules/Select/Select.component";

import { Inputs, InputProps } from "../fieldTypes";
import { FormInput, ValidationRule } from "..";

import "./FormField.scss";

type FormFieldState = {
  id: string;
  value: string;
  options?: SelectOption[];
  isDirty: boolean;
  errors: string[];
  Component: React.FC<InputProps>;
};

/**
 * FormField Component
 * 
 * @remarks 
 * React Component designed to render a form field and its properties.
 * 
 * @param label - Text description of the field.
 * @param inputType - Choose which input to render.
 * @param options - Optional prop to define the options of the select field.
 * @param htmlFor - Optional prop to control the for and id.
 * 
 * @example
    <FormField
     label="Example Label"
     validators={[]}
     inputType="SingleLine"
     onChange={(value: string) => null}
   />
 *
 */

export type FormFieldProps = {
  inputType: FormInput;
  label?: string;
  htmlFor?: string;
  options?: SelectOption[];
  onChange: (value: string) => void;
  validators: ValidationRule[];
};

const FormField: React.FC<FormFieldProps> = (props): JSX.Element => {
  const { inputType, label, htmlFor, validators, options, onChange } = props;

  const [fieldState, setFieldState] = React.useState<FormFieldState>({
    id: htmlFor || label || uuid(),
    value: "",
    isDirty: false,
    errors: [],
    options: options,
    Component: Inputs[inputType],
  });

  const blockClassName = "FormField";
  const fieldsetClassName = buildFieldsetClassNames(blockClassName, inputType);
  const inputClassName = buildInputClassNames(
    blockClassName,
    fieldState.errors.length > 0
  );
  const labelClassName = buildLabelClassNames(
    blockClassName,
    fieldState.value.length === 0,
    fieldState.errors.length > 0,
    fieldState.isDirty
  );

  return (
    <fieldset className={fieldsetClassName}>
      {label && (
        <Label
          htmlFor={fieldState.id}
          text={label}
          className={labelClassName}
        />
      )}

      <fieldState.Component
        value={fieldState.value}
        htmlFor={fieldState.id}
        options={fieldState.options}
        className={inputClassName}
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
 * Generate fieldset classnames
 * @param  {string} blockClassName Component Block Classname.
 * @param  {string} inputType True if the field has an error..
 * @returns {string}
 */
export function buildFieldsetClassNames(
  blockClassName: string,
  inputType: FormInput
) {
  const className = blockClassName;

  let classes = className;
  // if (inputType === "Custom") classes = `${classes} ${className}--isCheckbox`;

  return classes;
}

/**
 * Generate input classnames
 * @param  {string} blockClassName Component Block Classname.
 * @param  {boolean} containsError True if the field has an error.
 * @returns {string}
 */
export function buildInputClassNames(
  blockClassName: string,
  containsError: boolean
) {
  const className = `${blockClassName}__Input`;

  let classes = className;
  if (containsError) classes = `${classes} ${className}--containsError`;

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
  const className = `${blockClassName}__Label`;

  let classes = className;

  if (containsValue) classes = `${classes} ${className}--containsValue`;
  if (containsError) classes = `${classes} ${className}--containsError`;
  if (isDirty) classes = `${classes} ${className}--isDirty`;

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
