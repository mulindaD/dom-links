"use client";

import { useState } from "react";
import {
  Twitter, Linkedin, Youtube, Globe,
  Mic2, Briefcase, ArrowUpRight, Copy, Check,
  Music2, MapPin, Zap
} from "lucide-react";

const LINKS = [
  {
    id: "honeycoin",
    label: "HoneyCoin",
    sub: "African payments & stablecoin rails",
    href: "https://honeycoin.app",
    icon: <Zap size={18} className="text-[#E87722]" />,
    tag: { label: "CPO", color: "bg-orange-950 text-orange-400" },
  },
  {
    id: "podcast",
    label: "Admin Access Podcast",
    sub: "Tech trends, African fintech & banter",
    href: "https://www.youtube.com/@AdminAccesspodcast",
    icon: <Mic2 size={18} className="text-purple-400" />,
    tag: { label: "Co-host", color: "bg-purple-950 text-purple-400" },
  },
  {
    id: "twitter",
    label: "@d_mulinda on X",
    sub: "Fintech, stablecoins & Africa tech",
    href: "https://twitter.com/d_mulinda",
    icon: <Twitter size={18} className="text-sky-400" />,
    tag: null,
  },
  {
    id: "tiktok",
    label: "Admin Access on TikTok",
    sub: "Short-form tech takes",
    href: "https://www.tiktok.com/@admin.access_",
    icon: <Music2 size={18} className="text-pink-400" />,
    tag: { label: "47K views", color: "bg-pink-950 text-pink-400" },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Professional profile",
    href: "https://www.linkedin.com/in/dominicmulinda",
    icon: <Linkedin size={18} className="text-blue-400" />,
    tag: null,
  },
];

const STATS = [
  { label: "YT Subscribers", value: "820+" },
  { label: "TikTok Views", value: "47K+" },
  { label: "African Markets", value: "12+" },
];

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText("https://dom.mulinda.io");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen flex items-start justify-center px-4 py-12 noise">
      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#E87722]/8 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-sm flex flex-col items-center gap-6 relative z-10">

        {/* Avatar */}
        <div className="fade-up flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E87722] to-[#c9641a] avatar-ring flex items-center justify-center text-3xl font-bold text-white select-none shadow-2xl">
            D
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">Dominic Mulinda</h1>
            <div className="flex items-center justify-center gap-1.5 mt-1.5">
              <MapPin size={12} className="text-zinc-500" />
              <span className="text-sm text-zinc-400">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="fade-up-1 text-center">
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
            CPO at{" "}
            <a href="https://honeycoin.app" className="text-[#E87722] hover:underline">HoneyCoin</a>
            {" "}— building collection & payout rails across Africa.
            Co-host of{" "}
            <a href="https://www.youtube.com/@AdminAccesspodcast" className="text-purple-400 hover:underline">Admin Access Podcast</a>.
            Stablecoins, African fintech, real infrastructure.
          </p>
        </div>

        {/* Stats strip */}
        <div className="fade-up-2 w-full grid grid-cols-3 gap-2">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-[#111] border border-[#1f1f1f] rounded-xl py-3 px-2">
              <span className="text-lg font-bold text-white">{s.value}</span>
              <span className="text-[10px] text-zinc-500 mt-0.5 text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="fade-up-3 w-full flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1f1f1f] flex items-center justify-center shrink-0">
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white leading-none">{link.label}</p>
                <p className="text-xs text-zinc-500 mt-1 truncate">{link.sub}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {link.tag && (
                  <span className={`tag ${link.tag.color}`}>{link.tag.label}</span>
                )}
                <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-[#E87722] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Copy link */}
        <div className="fade-up-4 w-full">
          <button
            onClick={copyLink}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#222] bg-[#111] text-xs text-zinc-500 hover:border-[#E87722]/50 hover:text-zinc-300 transition-all"
          >
            {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
            {copied ? "Copied!" : "Copy profile link"}
          </button>
        </div>

        {/* Footer */}
        <div className="fade-up-5 text-center">
          <p className="text-[11px] text-zinc-700">
            Built with 🛠️ by{" "}
            <span className="text-[#E87722]">Luthiile</span>
          </p>
        </div>

      </div>
    </main>
  );
}
