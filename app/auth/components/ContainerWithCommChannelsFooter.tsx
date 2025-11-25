import { PropsWithChildren } from "react";
import CommunicationChannelsFooter from "./CommunicationChannelsFooter";

export default function ContainerWithCommChannelsFooter({
  children,
  className,
}: PropsWithChildren & {
  className?: string;
}) {
  return (
    <div
      className={`h-dvh overflow-auto grid grid-col grid-rows-[1fr_10rem] items-center bg-gradient-yellow-1 ${className}`}
    >
      {children}
      <CommunicationChannelsFooter />
    </div>
  );
}
