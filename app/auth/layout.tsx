"use client";
import { usePathnameChecker } from "@hooks/usePathnameChecker";
import SignupAndLoginLayout from "./components/SignupAndLoginLayout";
import ContainerWithCommChannelsFooter from "./components/ContainerWithCommChannelsFooter";

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
  return (
    <ContainerWithCommChannelsFooter>
      {children}
    </ContainerWithCommChannelsFooter>
  );
}
