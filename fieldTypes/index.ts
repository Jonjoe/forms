import { SelectOption } from "@app/components/core/molecules/Select/Select.component";
import { HTMLInputType } from "@app/entities/generics";

import SingleLineField from "./SingleLineField/SingleLineField.component";
import MultiLineField from "./MultiLineField/MultiLineField.component";
import PasswordField from "./PasswordField/PasswordField.component";
import SelectField from "./SelectField/SelectField.component";
import CheckboxField from "./CheckboxField/CheckboxField.component";

export interface InputProps {
  className?: string;
  value: string;
  htmlFor: string;
  type?: HTMLInputType;
  options?: SelectOption[];
  onChange: (value: string) => void;
}

export const Inputs = {
  SingleLine: SingleLineField,
  MultiLine: MultiLineField,
  Password: PasswordField,
  Select: SelectField,
  Checkbox: CheckboxField,
  Custom: null,
};
