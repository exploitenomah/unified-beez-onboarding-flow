import { PropsWithChildren } from "@node_modules/@types/react";
import CommunicationChannelsFooter from "./CommunicationChannelsFooter";

export default function ContainerWithCommChannelsFooter({
  children,
  className,
}: PropsWithChildren & {
  className?: string;
}) {
  return (
    <div
      className={`h-dvh overflow-auto grid grid-col grid-rows-[1fr_10rem] items-center bg-[linear-gradient(149deg,#FFFFFF_18.59%,#FCEDC6_143.2%)] ${className}`}
    >
      {children}
      <CommunicationChannelsFooter />
    </div>
  );
}
