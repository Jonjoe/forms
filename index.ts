import FormField from "./FormField/FormField.component";

export type ValidationRule = {
  rule: (value: string) => boolean;
  message: string;
};

export default {
  Field: FormField,
};
