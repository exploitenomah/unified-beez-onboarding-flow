import { useCallback } from "react";
import { useAppMutation } from "@lib/api";

export function useAsyncAction<TInput, TOutput>(
  action: (input: TInput) => Promise<TOutput>,
) {
  const mutation = useAppMutation<TInput, TOutput, { message?: string }>(
    action,
  );

  const run = useCallback(
    async (data: TInput) => mutation.mutateAsync(data),
    [mutation],
  );

  return {
    run,
    ...mutation,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
