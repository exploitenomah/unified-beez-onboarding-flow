import CommunicationChannelsFooter from "./CommunicationChannelsFooter";
import appFeatures from "../data/appFeatures.json";
import AppFeaturesSlide from "./AppFeaturesSlide";

export default function SignupAndLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid lg:grid-cols-2 h-dvh">
      <div className="hidden h-dvh lg:block">
        <AppFeaturesSlide stories={appFeatures} interval={4000} />
      </div>
      <div>
        {children}
        <CommunicationChannelsFooter />
      </div>
    </div>
  );
}
