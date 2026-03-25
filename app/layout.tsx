import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dominic Mulinda",
  description: "CPO at HoneyCoin · Co-host Admin Access Podcast · Building African fintech infrastructure.",
  openGraph: {
    title: "Dominic Mulinda",
    description: "CPO at HoneyCoin · Co-host Admin Access Podcast",
    type: "profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
