import Image from "next/image";

/* ── Icons (all inline SVG) ────────────────────────────────────────── */
const ArrowUpRight = () => (
  <svg className="link-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);
const XIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.903-5.633Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);
const ZapIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const MailIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────── */
const LINKS = [
  { id: "honeycoin", label: "HoneyCoin", sub: "honeycoin.app", href: "https://honeycoin.app", icon: <ZapIcon /> },
  { id: "podcast",  label: "Admin Access Podcast", sub: "YouTube · Co-host", href: "https://www.youtube.com/@AdminAccesspodcast", icon: <YoutubeIcon /> },
  { id: "twitter",  label: "@d_mulinda", sub: "X (Twitter)", href: "https://twitter.com/d_mulinda", icon: <XIcon /> },
  { id: "tiktok",   label: "Admin Access · TikTok", sub: "47K views", href: "https://www.tiktok.com/@admin.access_", icon: <TikTokIcon /> },
  { id: "linkedin", label: "LinkedIn", sub: "Dominic Mulinda", href: "https://www.linkedin.com/in/dominicmulinda", icon: <LinkedinIcon /> },
  { id: "email",    label: "Get in touch", sub: "dominic@honeycoin.app", href: "mailto:dominic@honeycoin.app", icon: <MailIcon /> },
];

/* ── Page ───────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main style={{ minHeight: "100vh", padding: "clamp(32px, 6vw, 72px) clamp(20px, 6vw, 64px)", maxWidth: 580, margin: "0 auto" }}>

      {/* ── HERO NAME — the unforgettable element ───────────────────── */}
      {/* Absurdly large, crops intentionally, orange dot as the only ornament */}
      <div className="a0" style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(64px, 18vw, 130px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            overflow: "hidden",
          }}
        >
          Dominic
          <br />
          Mulinda
          {/* The orange dot — only decorative element on the page */}
          <span style={{ color: "var(--accent)", lineHeight: 0 }}>.</span>
        </h1>
      </div>

      {/* ── IDENTITY ROW ────────────────────────────────────────────── */}
      <div className="a1" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        {/* Avatar */}
        <div style={{
          width: 52, height: 52, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
          outline: "2px solid var(--border)",
        }}>
          <Image src="/dom.jpg" alt="Dominic Mulinda" width={52} height={52}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
        </div>

        {/* Title stack */}
        <div>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
            color: "var(--ink)", letterSpacing: "-0.01em",
          }}>
            CPO · <span style={{ color: "var(--accent)" }}>HoneyCoin</span>
          </p>
          <p style={{
            fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ink-muted)",
            marginTop: 1,
          }}>
            Nairobi, Kenya
          </p>
        </div>
      </div>

      {/* ── BIO ─────────────────────────────────────────────────────── */}
      <p
        className="a1"
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: 15,
          lineHeight: 1.75,
          color: "var(--ink-muted)",
          maxWidth: 400,
          marginBottom: 48,
        }}
      >
        Building collection & payout rails across Africa.
        Co-host of Admin Access Podcast. Stablecoins. Infrastructure. The continent.
      </p>

      {/* ── STATS ───────────────────────────────────────────────────── */}
      <div
        className="a2"
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 48,
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "20px 0",
        }}
      >
        {[
          { v: "820+", l: "Subscribers" },
          { v: "47K+", l: "TikTok views" },
          { v: "12+",  l: "Markets" },
        ].map((s, i) => (
          <div key={s.l} style={{
            flex: 1,
            paddingLeft: i === 0 ? 0 : 20,
            borderLeft: i === 0 ? "none" : "1px solid var(--border)",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
              color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1,
            }}>{s.v}</p>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: 11, color: "var(--ink-faint)",
              marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>{s.l}</p>
          </div>
        ))}
      </div>

      {/* ── LINKS — clean list rows ──────────────────────────────────── */}
      <div className="a3">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="link-row"
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Icon pill */}
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: "var(--surface)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--ink-muted)", flexShrink: 0,
              }}>
                {link.icon}
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                  color: "inherit", lineHeight: 1.2,
                }}>{link.label}</p>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: 11,
                  color: "var(--ink-faint)", marginTop: 1,
                }}>{link.sub}</p>
              </div>
            </div>
            <ArrowUpRight />
          </a>
        ))}
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <p
        className="a4"
        style={{
          fontFamily: "var(--font-display)", fontSize: 11,
          color: "var(--ink-faint)", marginTop: 48,
          letterSpacing: "0.05em",
        }}
      >
        Built by <span style={{ color: "var(--accent)" }}>Luthiile</span>
      </p>

    </main>
  );
}
