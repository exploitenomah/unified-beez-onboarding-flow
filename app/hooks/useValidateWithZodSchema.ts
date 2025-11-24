import { useMemo } from "react";
import { ZodObject } from "zod";

export default function useValidateWithZodSchema<T>(
  schema: ZodObject,
  formData: T,
) {
  const validation = useMemo(() => {
    const result = schema.safeParse(formData);

    const isValid = result.success;

    const errors: Record<string, string[] | null> = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!errors[key]) errors[key] = [];
        errors[key]!.push(issue.message);
      }
    }

    return { isValid, errors };
  }, [formData, schema]);

  return validation;
}
