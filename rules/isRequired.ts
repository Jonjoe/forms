import { RuleOutput } from ".";

export default function isRequired(value: string): RuleOutput {
  const result = value.length !== 0;

  return {
    result,
    message: result ? "" : "This is a required field.",
  };
}
