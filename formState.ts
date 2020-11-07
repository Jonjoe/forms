import { Hash } from "@app/entities";

import { FormFieldState, FormProps } from ".";

/**
 * Update form state with a new value
 * @param  {string} value The value the formData needs to be updated with..
 * @param  {string} fieldName Field name that the value belongs to.
 * @param  {boolean} formData Original form data object hash..
 * @returns {object}
 */
export function updateValue(
  value: string,
  formId: string,
  formData: Hash<FormFieldState>
): Hash<FormFieldState> {
  return {
    ...formData,
    [formId]: {
      ...formData[formId],
      value,
    },
  };
}

/**
 * Factory to generate a Field State Object
 * @returns {object}
 */
export function createFormFieldState(): FormFieldState {
  return {
    value: "",
    errorMessage: "",
    isErrored: false,
    isRequired: true,
  };
}

/**
 * Convert 3D fields array into 2D Hash
 * @param  {Array} fields Array of the form fields.
 * @returns {object}
 */
export function flattenFields(
  fields: FormProps["fields"]
): Hash<FormFieldState> {
  const formStateHash: Hash<FormFieldState> = {};

  fields.forEach((row) => {
    row.forEach((field) => {
      formStateHash[field.label] = {
        ...createFormFieldState(),
        value: field.initialValue,
        label: field.label,
      };
    });
  });

  return formStateHash;
}
