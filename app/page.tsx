import {
  Twitter, Linkedin, Youtube,
  Mic2, ArrowUpRight, Music2, MapPin, Zap, Mail
} from "lucide-react";

const LINKS = [
  {
    id: "honeycoin",
    label: "HoneyCoin",
    sub: "African payments & stablecoin rails",
    href: "https://honeycoin.app",
    iconColor: "text-[#E87722]",
    iconName: "zap",
    tag: { label: "CPO", color: "bg-orange-950 text-orange-400" },
  },
  {
    id: "podcast",
    label: "Admin Access Podcast",
    sub: "Tech trends, African fintech & banter",
    href: "https://www.youtube.com/@AdminAccesspodcast",
    iconColor: "text-purple-400",
    iconName: "mic",
    tag: { label: "Co-host", color: "bg-purple-950 text-purple-400" },
  },
  {
    id: "twitter",
    label: "@d_mulinda on X",
    sub: "Fintech, stablecoins & Africa tech",
    href: "https://twitter.com/d_mulinda",
    iconColor: "text-sky-400",
    iconName: "twitter",
    tag: null,
  },
  {
    id: "tiktok",
    label: "Admin Access on TikTok",
    sub: "Short-form tech takes · 47K views",
    href: "https://www.tiktok.com/@admin.access_",
    iconColor: "text-pink-400",
    iconName: "music",
    tag: { label: "47K views", color: "bg-pink-950 text-pink-400" },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Professional profile",
    href: "https://www.linkedin.com/in/dominicmulinda",
    iconColor: "text-blue-400",
    iconName: "linkedin",
    tag: null,
  },
  {
    id: "email",
    label: "Get in touch",
    sub: "dominic@honeycoin.app",
    href: "mailto:dominic@honeycoin.app",
    iconColor: "text-zinc-400",
    iconName: "mail",
    tag: null,
  },
];

function LinkIcon({ name, className }: { name: string; className: string }) {
  if (name === "zap")     return <Zap size={18} className={className} />;
  if (name === "mic")     return <Mic2 size={18} className={className} />;
  if (name === "twitter") return <Twitter size={18} className={className} />;
  if (name === "music")   return <Music2 size={18} className={className} />;
  if (name === "linkedin")return <Linkedin size={18} className={className} />;
  if (name === "mail")    return <Mail size={18} className={className} />;
  return null;
}

export default function Page() {
  return (
    <main className="min-h-screen flex items-start justify-center px-4 py-12">

      {/* Background glow */}
      <div
        style={{
          position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 300, borderRadius: "50%",
          background: "rgba(232,119,34,0.07)", filter: "blur(120px)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      <div className="w-full max-w-sm flex flex-col items-center gap-6 relative" style={{ zIndex: 1 }}>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white select-none shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #E87722, #c9641a)",
              boxShadow: "0 0 0 4px rgba(232,119,34,0.25)",
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
        <div className="text-center">
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
                <LinkIcon name={link.iconName} className={link.iconColor} />
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
        <div className="text-center pt-2">
          <p className="text-[11px] text-zinc-700">
            Built with 🛠️ by{" "}
            <span className="text-[#E87722]">Luthiile</span>
          </p>
        </div>

      </div>
    </main>
  );
}
