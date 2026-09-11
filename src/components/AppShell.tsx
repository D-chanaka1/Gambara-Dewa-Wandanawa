"use client";

import { useState } from "react";
import Image from "next/image";
import { LangContext, useLang, type Lang } from "@/context/LangContext";

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

/* ─── Rounded Footer Card ─── */
export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-messages">
          <p className="footer-msg-primary">පූජා භූමිය පිරිසිදුව තබාගමු.</p>
          <p className="footer-msg-secondary">ඔබ සැමට ගම්භාර දෙවි පිහිටයි.</p>
        </div>
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
