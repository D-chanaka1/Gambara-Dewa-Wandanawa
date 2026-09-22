"use client";

import { useState } from "react";
import Image from "next/image";
import { LangContext, useLang, type Lang } from "@/context/LangContext";

const SITE_URL = "https://gambhara-dewa-wandhanawa.vercel.app";
const WA_MESSAGE =
  "ගම්භාර දේව වන්දනාව – බැතිමත් වන්දනාවය මෙතැනින් බලන්න: " +
  SITE_URL;

/* ─── Language Toggle Pill ─── */
function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      {(["sinhala", "stotram"] as Lang[]).map((l) => (
        <button
          key={l}
          id={`lang-btn-${l}`}
          onClick={() => setLang(l)}
          className={lang === l ? "active" : ""}
          aria-pressed={lang === l}
        >
          {l === "sinhala" ? "සිංහල" : "ස්තෝත්‍රය"}
        </button>
      ))}
    </div>
  );
}

/* ─── Floating Rounded Header Pill ─── */
export function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="header-brand">
          <span className="brand-si">දේව වන්දනාව</span>
          <span className="brand-en">Dewa Wandhanawa</span>
        </div>
        <LangToggle />
      </div>
    </header>
  );
}

/* ─── WhatsApp Share Button ─── */
function WhatsAppShare() {
  const [tapped, setTapped] = useState(false);

  const handleShare = () => {
    setTapped(true);
    setTimeout(() => setTapped(false), 600);
    window.open(
      `https://wa.me/?text=${encodeURIComponent(WA_MESSAGE)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      id="whatsapp-share-btn"
      className={`wa-share-btn${tapped ? " wa-share-btn--tapped" : ""}`}
      onClick={handleShare}
      aria-label="Share on WhatsApp"
      title="Share on WhatsApp"
    >
      <Image
        src="/whatsapp.webp"
        alt="WhatsApp"
        width={22}
        height={22}
        className="wa-icon"
        priority={false}
      />
      <span className="wa-label">{"Share \u0d9a\u0dbb\u0db1\u0dca\u0db1"}</span>
    </button>
  );
}

/* ─── Rounded Footer Card ─── */
export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-messages">
          <p className="footer-msg-primary">පූජා භූමිය පිරිසිදුවව තබාගමු.</p>
          <p className="footer-msg-secondary">ඔබ සැමට ගම්භාර දැළි පිහිටයි.</p>
        </div>

        {/* WhatsApp share button — centred below messages */}
        <WhatsAppShare />

        <div className="footer-sponsor">
          <span className="footer-label">බැතිබර දායකත්වය</span>
          <div className="footer-divider" aria-hidden="true" />
          <a
            href="https://www.mootelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mootelab website"
          >
            <Image
              src="/logo.png"
              alt="Mootelab logo"
              width={200}
              height={56}
              className="footer-logo"
              priority={false}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App Shell — language state provider wrapping every page ─── */
export default function AppShell({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("sinhala");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="app-shell">
        <div className="app-frame">{children}</div>
      </div>
    </LangContext.Provider>
  );
}
