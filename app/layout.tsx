import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dominic Mulinda",
  description: "CPO at HoneyCoin · Co-host Admin Access Podcast · Building African fintech infrastructure.",
  openGraph: {
    title: "Dominic Mulinda",
    description: "CPO at HoneyCoin · Building African payment rails.",
    type: "profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>{children}</body>
    </html>
  );
}
