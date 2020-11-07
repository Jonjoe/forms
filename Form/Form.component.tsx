import React from "react";

import { Hash } from "@app/entities";
import { Button, Flattened } from "@app/components";

import {
  updateValue,
  flattenFields,
  FormFieldState,
  FormField,
  FormInput,
  ValidationRule,
} from "..";

import "./Form.scss";

/**
 * Form Component
 * 
 * @remarks 
 * React Component designed to render aan entire form from a single object.
 * 
 * @param fields - Description of the form fields to be rendered
 * @param onSubmit - Event handler to emit the complete form dataSet.
 * @param secondaryButtonOnClick - Event handler to control the secondary button
 * @param primaryButtonText - Prop that sets the test of the primary button
 * @param secondaryButtonText - Prop that sets the test of the primary button
 * 
 * @example
    <Form
      onSubmit={(formData) => null}
      primaryButtonText="Example Button Text"
      secondaryButtonText="Example Button Text"
      secondaryButtonOnClick={() => null}
      fields={[
        [{
          label: string,
          initialValue: string;
          isRequired: boolean,
          validators: ValidationRule[],
          inputType: FormInput,
        }]
      ]} 
    />
 *
 */

export type FormProps = {
  /**
   * Handles emittion of the form data.,
   */
  onSubmit: (formState: Hash<FormFieldState>) => void;

  /**
   * Describes the  structure of the form,
   */
  fields: {
    label: string;
    initialValue: string;
    isRequired: boolean;
    validators: ValidationRule[];
    inputType: FormInput;
  }[][];

  /**
   * Controls text for the Primary Button.
   */
  primaryButtonText: string;

  /**
   * Controls text for the Secondary Button.
   */
  secondaryButtonText?: string;

  /**
   * Controls onClick of the Secondayr Button.
   */
  secondaryButtonOnClick?: () => void;
};

const Form: React.FC<FormProps> = (props): JSX.Element => {
  const {
    fields,
    onSubmit,
    primaryButtonText,
    secondaryButtonOnClick,
    secondaryButtonText,
  } = props;

  const initialFormState = flattenFields(fields);
  const [formState, updateFormState] = React.useState(initialFormState);

  return (
    <form className="container">
      {fields.map((row, index) => (
        <div className="row" key={"row" + index}>
          {row.map((field, index) => (
            <div className="col-md" key={"field" + index}>
              <FormField
                label={field.label}
                validators={field.validators}
                inputType={field.inputType}
                onChange={(value: string) => {
                  const newState = updateValue(value, field.label, formState);
                  updateFormState(newState);
                }}
              />
            </div>
          ))}
        </div>
      ))}

      <div className="row">
        <div className="col-md">
          <Flattened>
            {secondaryButtonOnClick && secondaryButtonText && (
              <Button
                variant="secondary"
                label={secondaryButtonText}
                onClick={() => secondaryButtonOnClick()}
                className="Form__SecondaryButton"
              />
            )}
            <Button
              variant="primary"
              label={primaryButtonText}
              onClick={() => onSubmit(formState)}
            />
          </Flattened>
        </div>
      </div>
    </form>
  );
};

export default Form;
