import Image from "next/image";

export default function LogoHeader() {
  return (
    <div className="bg-[linear-gradient(143deg,#053D27_21.47%,#FAB403_289.64%)] flex items-center gap-2.5 p-4 rounded-t-[1.6rem] whitespace-nowrap">
      <Image
        src="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/bee-icon.png"
        alt="UnifiedBeez Logo"
        width={46}
        height={46}
        className="object-contain"
      />
      <span className="text-white font-bold text-[2rem]">UnifiedBeez</span>
    </div>
  );
}
