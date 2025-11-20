import type { Metadata } from "next";

import { inter, skModernist } from "@/app/lib/fonts";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
