# Forms

My own form system. Ive dumped the code out into the repo for future packagification. Lacks tests, lacks instructions etc. Its quite fancy and I really like it <3.

### Example

```typescript
<Form
  onSubmit={(formData) => console.log(formData)}
  primaryButtonText="Sign Up"
  secondaryButtonText="Login"
  secondaryButtonOnClick={() => null}
  fields={[
      {
        label: "Field 1",
        inputType: "SingleLine",
        rules: ["isRequired", "isName"],
        value: "",
      },
      {
        label: "Field 2",
        inputType: "SingleLine",
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Field 3",
        inputType: "MultiLine",
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Custom Field",
        component: <p>this is the custom field</p>,
        rules: [],
        value: "",
      },
    ],
    [
      {
        label: "Field 4",
        inputType: "Password",
        rules: ["isRequired"],
        value: "",
      },
      {
        label: "Field 5",
        inputType: "Password",
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Field 11",
        inputType: "SingleLine",
        rules: ["isRequired"],
        value: "",
      },
      {
        label: "Custom Field 2",
        component: <p>this is the custom field</p>,
        rules: [],
        value: "",
      },
    ],
    [
      {
        label: "Field 14",
        inputType: "Checkbox",
        checkboxLabel: <Text.Body>hi</Text.Body>,
        rules: ["isRequired"],
        value: "",
      },
    ],
    [
      {
        label: "Field 6",
        inputType: "Select",
        rules: [],
        selectOptions: [
          {
            value: "a",
            label: "A",
          },
          {
            value: "b",
            label: "B",
          },
        ],
        value: "",
      },
    ],
    [
      {
        label: "Field 10",
        inputType: "SingleLine",
        rules: ["isRequired"],
        value: "",
      },
    ],
  ]}
/>
```
