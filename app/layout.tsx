import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
