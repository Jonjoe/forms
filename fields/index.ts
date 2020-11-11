import SingleLineField from "./SingleLineField/SingleLineField.component";
import MultiLineField from "./MultiLineField/MultiLineField.component";
import PasswordField from "./PasswordField/PasswordField.component";
import SelectField from "./SelectField/SelectField.component";
import CheckboxField from "./CheckboxField/CheckboxField.component";

import { SelectOption } from "@app/components/core/molecules/Select/Select.component";

export type HTMLInputType = "tel" | "number" | "text" | "email" | "password";

export type FormFieldType =
  | "SingleLine"
  | "MultiLine"
  | "Password"
  | "Select"
  | "Checkbox";

export interface SharedFieldProps {
  className?: string;
  value: string;
  htmlFor: string;
  type?: HTMLInputType;
  options?: SelectOption[];
  checkboxLabel?: JSX.Element;
  onChange: (value: string) => void;
}

export const Fields = {
  SingleLine: SingleLineField,
  MultiLine: MultiLineField,
  Password: PasswordField,
  Select: SelectField,
  Checkbox: CheckboxField,
};
