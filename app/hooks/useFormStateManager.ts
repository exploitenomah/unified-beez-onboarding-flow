import { useState, useCallback } from "react";
import { isNull, isUndefined } from "@utils/is";

export default function useFormStateManager<
  T extends Record<string, string | number | boolean | undefined>,
>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState);

  const updateFormData = useCallback(
    <K extends keyof T>(field: K, value: T[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const allFieldsArePresent = Object.values(formData).every(
    (value) => !isUndefined(value) && !isNull(value),
  );

  return {
    formData,
    updateFormData,
    allFieldsArePresent,
    setFormData,
  };
}
