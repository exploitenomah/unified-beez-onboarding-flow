import type { Metadata } from "next";
import { inter, skModernist } from "@lib/fonts";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnifiedBeez Onboarding Flow",
  description: "By Exploit",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${skModernist.variable} ${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
