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
    [
      {
        label: "Username/Password",
        initialValue: "",
        isRequired: true,
        validators: [],
        inputType: "SingleLine",
      },
    ],
    [
      {
        label: "Password",
        initialValue: "",
        isRequired: true,
        validators: [],
        inputType: "Password",
      },
    ],
    [
      {
        label: "Remember Me",
        initialValue: "",
        isRequired: false,
        validators: [],
        inputType: "Checkbox",
      },
    ],
  ]}
/>
```
