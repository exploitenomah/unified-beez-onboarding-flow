import appFeatures from "../data/appFeatures.json";
import AppFeaturesSlide from "./AppFeaturesSlide";
import AuthFormContainer from "./AuthFormContainer";
import ContainerWithCommChannelsFooter from "./ContainerWithCommChannelsFooter";

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
      <ContainerWithCommChannelsFooter>
        <AuthFormContainer>{children}</AuthFormContainer>
      </ContainerWithCommChannelsFooter>
    </div>
  );
}
