import type { Metadata } from "next";
import Providers from "@app/providers";
import { inter, skModernist } from "@lib/fonts";
import "@app/globals.css";

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
