import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-display",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dominic Mulinda",
  description: "CPO at HoneyCoin · Co-host Admin Access Podcast · Building African payment infrastructure.",
  openGraph: {
    title: "Dominic Mulinda",
    description: "CPO at HoneyCoin · Building African payment rails.",
    type: "profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <body style={{ fontFamily: "var(--font-display), sans-serif" }}>{children}</body>
    </html>
  );
}
