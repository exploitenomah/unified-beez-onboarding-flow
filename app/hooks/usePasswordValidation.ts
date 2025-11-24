export function usePasswordRulesValidation(password: string) {
  const rules = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "At least one uppercase letter", test: /[A-Z]/.test(password) },
    { label: "At least one lowercase letter", test: /[a-z]/.test(password) },
    { label: "At least one digit", test: /\d/.test(password) },
    {
      label: "At least one special character",
      test: /[^A-Za-z0-9]/.test(password),
    },
  ];
  const isValid = rules.every((r) => r.test);
  return { rules, isValid };
}
