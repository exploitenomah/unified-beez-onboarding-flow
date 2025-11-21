import Image from "next/image";
import { InfiniteNewsTicker } from "@components/newsTicker/InfiniteNewsTicker";
import communicationChannelsInOrder from "../data/communicationChannels.json";

export default function CommunicationChannelsFooter() {
  return (
    <InfiniteNewsTicker
      speed={0.8}
      gap={1}
      className="pt-6"
      items={communicationChannelsInOrder.map((commChannel, idx) => (
        <Image
          key={commChannel}
          width={75}
          height={75}
          alt={`${commChannel} logo`}
          className="animate-pulsse animate-bounce"
          src={`https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/comm-channel-logo-${idx + 1}.png`}
          style={{
            animationDelay: `${idx * 0.2}s`,
          }}
        />
      ))}
    />
  );
}
