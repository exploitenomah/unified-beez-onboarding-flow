import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
