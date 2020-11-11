import React from "react";

import { Hash } from "@app/entities";
import { Button, Errors, Flattened, Label } from "@app/components";

import { Fields, FormFieldType, SharedFieldProps } from "../fields";
import validationRules, { ValidationRuleName } from "../rules";

import "./FormController.scss";

type FormState = Hash<FormField>;

interface FormFieldProps {
  label: string;
  rules: ValidationRuleName[];
  inputType?: FormFieldType;
  component?: JSX.Element;
  selectOptions?: SharedFieldProps["options"];
  checkboxLabel?: SharedFieldProps["checkboxLabel"];
  value: string;
}

interface FormField extends FormFieldProps {
  id: string;
  errors: string[];
}

export type FormProps = {
  fields: FormFieldProps[][];
  onSubmit: (formState: FormState) => void;
};

type FormStateDispatch = React.Dispatch<React.SetStateAction<FormState>>;

const Form: React.FC<FormProps> = (props): JSX.Element => {
  const { fields, onSubmit } = props;

  const [formState, setFormState] = React.useState(flattenFields(fields));

  return (
    <form className="Form">
      {fields.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((field, fieldIndex) => {
            if (!field.inputType || field.component) {
              return (
                <div className="col-md" key={fieldIndex}>
                  <fieldset className="Form__Field">{field.component}</fieldset>
                </div>
              );
            }

            const FieldComponent = Fields[field.inputType];
            const fieldState = formState[field.label];

            return (
              <div className="col-md" key={fieldIndex}>
                <fieldset className="Form__Field">
                  {fieldState.inputType !== "Checkbox" && (
                    <Label text={fieldState.label} />
                  )}

                  <FieldComponent
                    htmlFor={fieldState.label}
                    value={fieldState.value}
                    options={fieldState.selectOptions}
                    checkboxLabel={fieldState.checkboxLabel}
                    onChange={(value) =>
                      setFormState({
                        ...formState,
                        [fieldState.label]: {
                          ...fieldState,
                          value,
                          errors: [
                            ...processFieldRules({ ...fieldState, value }),
                          ],
                        },
                      })
                    }
                  />

                  <Errors errorList={fieldState.errors} />
                </fieldset>
              </div>
            );
          })}
        </div>
      ))}

      <div className="row pt-3">
        <div className="col-md">
          <Flattened spaced>
            <Button
              className="Form__SecondaryButton"
              variant="secondary"
              label="Else"
              onClick={() => null}
            />
            <Button
              variant="primary"
              label="Submit"
              onClick={() => handleSubmit(formState, setFormState, onSubmit)}
            />
          </Flattened>
        </div>
      </div>
    </form>
  );
};

function handleSubmit(
  formState: FormState,
  setFormState: FormStateDispatch,
  onSubmit: FormProps["onSubmit"]
): void {
  const newFormState: FormState = { ...formState };

  let formHasErrors = false;
  Object.values(formState).forEach((field) => {
    const errors = processFieldRules(field);

    newFormState[field.label] = {
      ...field,
      errors: [...errors],
    };

    if (errors.length > 0) formHasErrors = true;
  });

  if (formHasErrors) {
    return setFormState({ ...newFormState });
  } else {
    return onSubmit({ ...newFormState });
  }
}

function processFieldRules(field: FormField): string[] {
  const rules = field.rules.map((rule) => validationRules[rule]);
  const errors: string[] = [];

  rules.forEach((rule) => {
    const output = rule(field.value);
    if (!output.result) errors.push(output.message);
  });

  return errors;
}

function flattenFields(fields: FormProps["fields"]): FormState {
  const fieldsHash: FormState = {};

  fields.forEach((row) => {
    row.forEach((field) => {
      fieldsHash[field.label] = {
        ...field,
        id: field.label,
        errors: [],
      };
    });
  });

  return fieldsHash;
}
export default Form;
