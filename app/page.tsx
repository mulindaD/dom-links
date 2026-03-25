import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

function XIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.903-5.633Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

const LINKS = [
  {
    id: "honeycoin",
    label: "HoneyCoin — African Payments",
    sub: "honeycoin.app",
    href: "https://honeycoin.app",
    icon: <ZapIcon />,
    bg: "#E87722",
    textColor: "#fff",
  },
  {
    id: "podcast",
    label: "Admin Access Podcast",
    sub: "YouTube · Co-host",
    href: "https://www.youtube.com/@AdminAccesspodcast",
    icon: <YoutubeIcon />,
    bg: "#1a1a1a",
    textColor: "#fff",
  },
  {
    id: "twitter",
    label: "@d_mulinda",
    sub: "X (Twitter)",
    href: "https://twitter.com/d_mulinda",
    icon: <XIcon />,
    bg: "#1a1a1a",
    textColor: "#fff",
  },
  {
    id: "tiktok",
    label: "Admin Access on TikTok",
    sub: "47K views · @admin.access_",
    href: "https://www.tiktok.com/@admin.access_",
    icon: <TikTokIcon />,
    bg: "#1a1a1a",
    textColor: "#fff",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Dominic Mulinda",
    href: "https://www.linkedin.com/in/dominicmulinda",
    icon: <LinkedinIcon />,
    bg: "#1a1a1a",
    textColor: "#fff",
  },
  {
    id: "email",
    label: "Get in touch",
    sub: "dominic@honeycoin.app",
    href: "mailto:dominic@honeycoin.app",
    icon: <MailIcon />,
    bg: "#1a1a1a",
    textColor: "#fff",
  },
];

export default function Page() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-5 pt-14 pb-16"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(232,119,34,0.12) 0%, transparent 60%), #0d0d0f",
      }}
    >
      <div className="w-full max-w-[360px] flex flex-col items-center">

        {/* Avatar */}
        <div className="a1 flex flex-col items-center gap-3 mb-6">
          <div
            className="w-[88px] h-[88px] rounded-full overflow-hidden"
            style={{
              boxShadow: "0 0 0 3px rgba(232,119,34,0.35), 0 0 40px rgba(232,119,34,0.18)",
            }}
          >
            <Image
              src="/dom.jpg"
              alt="Dominic Mulinda"
              width={88}
              height={88}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="text-center">
            <h1 className="text-[22px] font-bold text-white tracking-tight leading-tight">
              Dominic Mulinda
            </h1>
            <div className="flex items-center justify-center gap-1 mt-1">
              <MapPin size={11} className="text-zinc-500" />
              <span className="text-[13px] text-zinc-500">Nairobi, Kenya</span>
            </div>
          </div>

          <p className="text-[13px] text-zinc-400 text-center leading-relaxed max-w-[280px] mt-1">
            CPO{" "}
            <span className="text-[#E87722]">@HoneyCoin</span>
            {" · "}Building African payment rails.
            Co-host{" "}
            <span className="text-zinc-300">Admin Access Podcast</span>.
          </p>
        </div>

        {/* Stats */}
        <div className="a2 w-full grid grid-cols-3 gap-2.5 mb-8">
          {[
            { v: "820+", l: "YT Subscribers" },
            { v: "47K+", l: "TikTok Views" },
            { v: "12+",  l: "Markets" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex flex-col items-center py-3.5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="text-[18px] font-bold text-white leading-none">{s.v}</span>
              <span className="text-[11px] text-zinc-500 mt-1 text-center leading-tight">{s.l}</span>
            </div>
          ))}
        </div>

        {/* Link buttons */}
        <div className="a3 w-full flex flex-col gap-3">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="pill-btn"
              style={{
                background: link.bg,
                border: link.bg === "#1a1a1a" ? "1px solid rgba(255,255,255,0.08)" : "none",
                animationDelay: `${0.35 + i * 0.06}s`,
              }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: link.bg === "#E87722" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white leading-tight">{link.label}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{link.sub}</p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-zinc-500 shrink-0" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="a4 mt-10 text-center">
          <p className="text-[11px] text-zinc-700">
            Built by <span className="text-[#E87722]">Luthiile</span> 🛠️
          </p>
        </div>

      </div>
    </main>
  );
}
