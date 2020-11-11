import isRequired from "./isRequired";
import isName from "./isName";

export type ValidationRuleName = "isRequired" | "isName";

export type RuleOutput = {
  result: boolean;
  message: string;
};

export default {
  isRequired,
  isName,
};
