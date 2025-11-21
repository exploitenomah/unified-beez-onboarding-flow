import CommunicationChannelsFooter from "./CommunicationChannelsFooter";
import appFeatures from "../data/appFeatures.json";
import AppFeaturesSlide from "./AppFeaturesSlide";
import AuthFormContainer from "./AuthFormContainer";

export default function SignupAndLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid lg:grid-cols-2 h-dvh overflow-hidden">
      <div className="hidden h-dvh lg:block">
        <AppFeaturesSlide stories={appFeatures} interval={4000} />
      </div>
      <div className="h-dvh grid grid-col grid-rows-[1fr_8rem] items-center bg-[linear-gradient(149deg,#FFFFFF_18.59%,#FCEDC6_143.2%)]">
        <AuthFormContainer>{children}</AuthFormContainer>
        <CommunicationChannelsFooter />
      </div>
    </div>
  );
}
