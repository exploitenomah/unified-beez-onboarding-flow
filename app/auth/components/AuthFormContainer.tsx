import useToggleRoute from "@hooks/useToggleRoute";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import AuthProviderButton from "@components/button/AuthProviderButton";
import { BaseToggle } from "@components/toggle/BaseToggle";
import OrDivider from "./OrDivider";

export default function AuthFormContainer({
  children,
}: React.PropsWithChildren) {
  const { currentRoute, goTo } = useToggleRoute(
    (pathname) => pathname.split("/")[2],
  );

  return (
    <OnboardingStepCardWithHeader
      type="image"
      imageSrc="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/UNIFIEDBEEZ%20-LOGO-PRIMARY-1.png"
      imageAlt="UnifiedBeez Logo"
      className="my-11 w-8/9 max-w-130 mx-auto"
    >
      <BaseToggle
        options={[
          { value: "sign-up", label: "Create Account" },
          { value: "login", label: "Login" },
        ]}
        value={currentRoute}
        isPadded
        equalWidth
        onChange={(v) => goTo(v.toString())}
        className="mb-4"
      />
      {children}
      <OrDivider
        text={`or ${currentRoute.split("-").join(" ")} with`}
        className="my-6"
      />
      <div className="flex gap-3 justify-center items-center">
        <AuthProviderButton
          iconSrc="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/google-logo.png"
          iconAlt="google logo"
        >
          Google
        </AuthProviderButton>
        <AuthProviderButton
          iconSrc="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/apple-logo.png"
          iconAlt="Apple logo"
        >
          Apple ID
        </AuthProviderButton>
        <AuthProviderButton
          iconSrc="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/microsoft-logo.png"
          iconAlt="microsoft logo"
        >
          Microsoft
        </AuthProviderButton>
      </div>
      <span className="block text-dark-base-70 text-xs text-center max-w-[31.4rem] mx-auto mt-6">
        By continuing, you agree to UnifiedBeez&apos;s{" "}
        <a href="#">Terms of Service</a> and acknowledge that you&apos;ve read
        our <a href="#">Privacy Policy</a>.
      </span>
    </OnboardingStepCardWithHeader>
  );
}
