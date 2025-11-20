import type { Metadata } from "next";

import { inter, skModernist } from "@/app/lib/fonts";
import Providers from "@/app/providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "UnifiedBeez Onboarding Flow",
  description: "By Exploit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${skModernist.variable} ${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
