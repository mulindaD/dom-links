import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/* ── SVG Icons ──────────────────────────────────────────────────────── */
function XIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.903-5.633Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function LinkedinIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function TikTokIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>;
}
function YoutubeIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;
}
function ZapIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function MailIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}

/* ── Data ───────────────────────────────────────────────────────────── */
const LINKS = [
  {
    id: "honeycoin",
    label: "HoneyCoin",
    sub: "African payments & stablecoin rails",
    href: "https://honeycoin.app",
    icon: <ZapIcon />,
    accent: true,
  },
  {
    id: "podcast",
    label: "Admin Access Podcast",
    sub: "Tech banter for African tech minds",
    href: "https://www.youtube.com/@AdminAccesspodcast",
    icon: <YoutubeIcon />,
    accent: false,
  },
  {
    id: "twitter",
    label: "@d_mulinda",
    sub: "Fintech, stablecoins & Africa",
    href: "https://twitter.com/d_mulinda",
    icon: <XIcon />,
    accent: false,
  },
  {
    id: "tiktok",
    label: "Admin Access · TikTok",
    sub: "47K views · @admin.access_",
    href: "https://www.tiktok.com/@admin.access_",
    icon: <TikTokIcon />,
    accent: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Dominic Mulinda",
    href: "https://www.linkedin.com/in/dominicmulinda",
    icon: <LinkedinIcon />,
    accent: false,
  },
  {
    id: "email",
    label: "Get in touch",
    sub: "dominic@honeycoin.app",
    href: "mailto:dominic@honeycoin.app",
    icon: <MailIcon />,
    accent: false,
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main className="min-h-screen relative" style={{ zIndex: 1 }}>

      {/* Warm radial glow — top right, subtle */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          background: "radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto px-7 pt-16 pb-20"
        style={{ maxWidth: 480, zIndex: 1 }}
      >

        {/* ── Avatar + name ───────────────────────────────────────── */}
        <div className="flex items-end gap-5 mb-10">
          {/* Photo */}
          <div
            className="shrink-0"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(232,119,34,0.4)",
              boxShadow: "0 0 0 4px rgba(232,119,34,0.08)",
            }}
          >
            <Image
              src="/dom.jpg"
              alt="Dominic Mulinda"
              width={72}
              height={72}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Name block — left aligned, editorial */}
          <div className="anim-name">
            <p
              className="anim-sub"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#E87722",
                marginBottom: 4,
              }}
            >
              Nairobi, Kenya
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 8vw, 42px)",
                fontWeight: 800,
                color: "#f5f0eb",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Dominic
              <br />
              Mulinda
            </h1>
          </div>
        </div>

        {/* Orange accent line — the unforgettable element */}
        <div
          className="anim-line mb-10"
          style={{
            height: 2,
            background: "linear-gradient(90deg, #E87722 0%, rgba(232,119,34,0.15) 100%)",
            borderRadius: 1,
          }}
        />

        {/* ── Bio ─────────────────────────────────────────────────── */}
        <p
          className="anim-bio mb-10"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 300,
            color: "rgba(245,240,235,0.65)",
            lineHeight: 1.75,
            maxWidth: 360,
          }}
        >
          Chief Product Officer at{" "}
          <a
            href="https://honeycoin.app"
            style={{ color: "#E87722", textDecoration: "none", fontWeight: 500 }}
          >
            HoneyCoin
          </a>{" "}
          — building collection & payout rails across Africa.
          Co-host of{" "}
          <span style={{ color: "#f5f0eb", fontWeight: 400 }}>Admin Access Podcast</span>.
          Stablecoins. Infrastructure. The continent.
        </p>

        {/* ── Stats ───────────────────────────────────────────────── */}
        <div
          className="anim-stats mb-12"
          style={{ display: "flex", gap: 32 }}
        >
          {[
            { v: "820+", l: "YT Subscribers" },
            { v: "47K+", l: "TikTok Views" },
            { v: "12+",  l: "Markets" },
          ].map((s) => (
            <div key={s.l}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#f5f0eb",
                  lineHeight: 1,
                }}
              >
                {s.v}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  color: "rgba(245,240,235,0.4)",
                  marginTop: 4,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>

        {/* ── Links ───────────────────────────────────────────────── */}
        <div className="anim-links" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="link-btn"
              style={link.accent ? {
                background: "rgba(232,119,34,0.1)",
                borderColor: "rgba(232,119,34,0.3)",
              } : {}}
            >
              {/* Icon */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: link.accent ? "rgba(232,119,34,0.15)" : "rgba(245,240,235,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: link.accent ? "#E87722" : "rgba(245,240,235,0.5)",
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#f5f0eb",
                  lineHeight: 1.2,
                }}>
                  {link.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(245,240,235,0.4)",
                  marginTop: 2,
                  fontWeight: 300,
                }}>
                  {link.sub}
                </p>
              </div>

              <ArrowUpRight
                size={14}
                style={{ color: "rgba(245,240,235,0.25)", flexShrink: 0 }}
              />
            </a>
          ))}
        </div>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <p
          className="anim-footer"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "rgba(245,240,235,0.2)",
            marginTop: 48,
            letterSpacing: "0.05em",
          }}
        >
          Built by{" "}
          <span style={{ color: "#E87722" }}>Luthiile</span>
        </p>

      </div>
    </main>
  );
}
