import { useEffect, useMemo, useState } from "react";
import { DeviceType } from "./types";

export function useDeviceType() {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );
    const desktop = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (mobile.matches) setDevice("mobile");
      else if (tablet.matches) setDevice("tablet");
      else if (desktop.matches) setDevice("desktop");
    };

    update();

    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    desktop.addEventListener("change", update);

    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);

  const isDeviceType = useMemo(
    () => ({
      isMobile: device === "mobile",
      isDesktop: device === "desktop",
      isTablet: device === "tablet",
    }),
    [device],
  );

  return {
    device,
    ...isDeviceType,
  };
}
