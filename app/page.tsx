import {
  Mic2, ArrowUpRight, Music2, MapPin, Zap, Mail, Globe, ExternalLink
} from "lucide-react";

function XIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.903-5.633Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

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
    icon: <XIcon size={18} className="text-zinc-200" />,
    tag: null,
  },
  {
    id: "tiktok",
    label: "Admin Access — TikTok",
    sub: "Short-form tech takes · 47K views",
    href: "https://www.tiktok.com/@admin.access_",
    icon: <Music2 size={18} className="text-pink-400" />,
    tag: { label: "47K views", color: "bg-pink-950 text-pink-400" },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Professional profile",
    href: "https://www.linkedin.com/in/dominicmulinda",
    icon: <LinkedinIcon size={18} className="text-blue-400" />,
    tag: null,
  },
  {
    id: "email",
    label: "Get in touch",
    sub: "dominic@honeycoin.app",
    href: "mailto:dominic@honeycoin.app",
    icon: <Mail size={18} className="text-zinc-400" />,
    tag: null,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-sm flex flex-col items-center gap-6 relative" style={{ zIndex: 1 }}>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white select-none"
            style={{
              background: "linear-gradient(135deg, #E87722, #c9641a)",
              boxShadow: "0 0 0 4px rgba(232,119,34,0.25), 0 8px 32px rgba(232,119,34,0.2)",
            }}
          >
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
        <p className="text-sm text-zinc-400 leading-relaxed text-center max-w-xs">
          CPO at{" "}
          <a href="https://honeycoin.app" className="text-[#E87722] hover:underline">HoneyCoin</a>
          {" "}— building collection & payout rails across Africa.
          Co-host of{" "}
          <a href="https://www.youtube.com/@AdminAccesspodcast" className="text-purple-400 hover:underline">Admin Access Podcast</a>.
        </p>

        {/* Stats */}
        <div className="w-full grid grid-cols-3 gap-2">
          {[
            { label: "YT Subscribers", value: "820+" },
            { label: "TikTok Views", value: "47K+" },
            { label: "African Markets", value: "12+" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl py-3 px-2 border border-[#1f1f1f]"
              style={{ background: "#111" }}
            >
              <span className="text-lg font-bold text-white">{s.value}</span>
              <span className="text-[10px] text-zinc-500 mt-0.5 text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="link-card group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#1f1f1f" }}
              >
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

        {/* Footer */}
        <p className="text-[11px] text-zinc-700 pt-2">
          Built with 🛠️ by <span className="text-[#E87722]">Luthiile</span>
        </p>

      </div>
    </main>
  );
}
