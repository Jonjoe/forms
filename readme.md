# Forms

My own form system. Ive dumped the code out into the repo for future packagification. Lacks tests, lacks instructions etc. Its quite fancy and I really like it <3.

### Example

```typescript
<Form.Field
        inputType="SingleLine"
        validators={[
          {
            rule: (value) => value.length !== 0,
            message: "Please enter a username",
          },
        ]}
        label="Username/Email"
        onChange={(value) => setFormData({ ...formData, username: { value } })}
        htmlFor="username"
      />
```
