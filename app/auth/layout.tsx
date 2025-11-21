"use client";
import { usePathnameChecker } from "@hooks/usePathnameChecker";
import SignupAndLoginLayout from "./components/SignupAndLoginLayout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { matches: isAuthEntry } = usePathnameChecker({
    paths: ["/auth/sign-up", "/auth/login"],
  });

  if (isAuthEntry)
    return <SignupAndLoginLayout>{children}</SignupAndLoginLayout>;
  return <>{children}</>;
}
