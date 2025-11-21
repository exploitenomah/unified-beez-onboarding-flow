import Image from "next/image";
import useToggleRoute from "@/app/hooks/useToggleRoute";
import AuthProviderButton from "@components/button/AuthProviderButton";
import { BaseToggle } from "@components/toggle/BaseToggle";
import OrDivider from "./OrDivider";

export default function AuthFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentRoute, goTo } = useToggleRoute({ initialRoute: "sign-up" });

  return (
    <div className="p-8 w-8/9 max-w-130 mx-auto bg-[linear-gradient(165deg,#E6FAF2_-11.22%,#E3CF9B_219.35%)] rounded-[2.4rem]">
      <Image
        src="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/UNIFIEDBEEZ%20-LOGO-PRIMARY-1.png"
        alt="UnifiedBeez Logo"
        width={260}
        height={84}
        className="mx-auto mb-6"
      />
      <BaseToggle
        options={[
          { value: "sign-up", label: "Create Account" },
          { value: "login", label: "Login" },
        ]}
        value={currentRoute}
        isPadded
        equalWidth
        onChange={(v) => goTo(v.toString())}
      />
      {children}
      <OrDivider
        text={`or ${currentRoute.split("-").join(" ")} with`}
        className="my-6"
      />
      <div className="flex gap-3 justify-center items-center">
        <AuthProviderButton
          authIcon={
            <Image
              src="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/google-logo.png"
              alt="google logo"
              width={24}
              height={24}
            />
          }
        >
          Google
        </AuthProviderButton>
        <AuthProviderButton
          authIcon={
            <Image
              src="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/apple-logo.png"
              alt="Apple logo"
              width={24}
              height={24}
            />
          }
        >
          Apple ID
        </AuthProviderButton>
        <AuthProviderButton
          authIcon={
            <Image
              src="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/microsoft-logo.png"
              alt="microsoft logo"
              width={24}
              height={24}
            />
          }
        >
          Microsoft
        </AuthProviderButton>
      </div>
    </div>
  );
}
