import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const skModernist = localFont({
  src: [
    {
      path: "../../public/sk-modernist/Sk-Modernist-Regular.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/sk-modernist/Sk-Modernist-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/sk-modernist/Sk-Modernist-Mono.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sk-modernist",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
