"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/api";
import GlobalStoreProvider from "@store/GlobalStoreProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalStoreProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </GlobalStoreProvider>
  );
}
