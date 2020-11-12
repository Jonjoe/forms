import isRequired from "./isRequired";
import isName from "./isName";
import isPhoneNumber from "./isPhoneNumber";

export type ValidationRuleName = "isRequired" | "isName" | "isPhoneNumber";

export type RuleOutput = {
  result: boolean;
  message: string;
};

export default {
  isRequired,
  isName,
  isPhoneNumber,
};
