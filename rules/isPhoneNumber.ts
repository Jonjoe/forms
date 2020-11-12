import validator from "validator";
import { RuleOutput } from ".";

export default function isName(value: string): RuleOutput {
  const result = validator.isNumeric(value);

  return {
    result,
    message: result ? "" : "Please enter a vailid phone number.",
  };
}
