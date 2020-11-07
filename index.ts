import Form from "./Form/Form.component";

export type ValidationRule = {
  rule: (value: string) => boolean;
  message: string;
};

export { default as FormField } from "./FormField/FormField.component";
export type { FormFieldProps } from "./FormField/FormField.component";
export type { FormProps } from "./Form/Form.component";
export { updateValue, createFormFieldState, flattenFields } from "./formState";

export type FormInput =
  | "SingleLine"
  | "MultiLine"
  | "Password"
  | "Select"
  | "Checkbox";

export type FormFieldState = {
  value: string;
  errorMessage: string;
  label?: string;
  isErrored: boolean;
  isRequired: boolean;
};

export default Form;
