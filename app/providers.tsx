"use client";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/app/lib/api";
import GlobalStoreProvider from "@/app/store/GlobalStoreProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalStoreProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </GlobalStoreProvider>
  );
}
