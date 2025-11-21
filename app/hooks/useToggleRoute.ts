"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { UseToggleRouteOptions } from "./types";

export default function useToggleRoute({
  initialRoute,
}: UseToggleRouteOptions) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  const goTo = useCallback(
    (newRoute: string) => {
      setCurrentRoute(newRoute);
      router.push(newRoute);
    },
    [router],
  );

  const isActiveRoute = useCallback(
    (route: string) => pathname === route,
    [pathname],
  );

  return {
    currentRoute,
    goTo,
    isActiveRoute,
  };
}
