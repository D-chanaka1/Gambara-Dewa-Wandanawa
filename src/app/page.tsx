"use client";

import { SiteHeader, SiteFooter } from "@/components/AppShell";
import { useLang } from "@/context/LangContext";
import GsapAnimations from "@/components/GsapAnimations";

/* ── Prayer content keyed by language tab ── */
const PRAYER: Record<"sinhala" | "stotram", string> = {
  sinhala:
    "පස්වාන් දහසකට මේ ශ්‍රී ලංකා ද්වීපයේ අතුරු සිදුරු නොමැතිව ගම් කොරටු භාරව සියළු නර සතුන්ගේ පූජාවන්ට දිවැස් හෙලා සියලු සත්වයා හට ශාන්ති දානය සලස්වන ශ්‍රීමත් සිද්ධ සූනියන් දිව්‍ය රාජෝත්තමයාණන් වහන්සේට දොහොත් මුදුන් තබා වැඳගෙන කියා සිටින කන්නලව්ව නම් සෘද්ධිමත්  මහා බල ඇති සිද්ධ ඔඩ්ඩිස සූනියන​ම් දිව්‍ය රාජෝත්තමයාණන් වහන්ස, නීල වර්ණ දේහයකින්  හා එසේම තුරඟ වාහනාරූඪව ත්‍රිශූලය, ගි​ණී කබල, වඩිග කඩුවක් ද එක් අතක දරා ඇති, භයංකර රාක්ෂ අවතාරයක් මවාගෙන ලේ පොළඟෙක් කටින් ගෙන සිරස ගෙළ අත් උදර​ය වටා නං​වා සර්පාභරණයෙන් ඔප් නැඟී යකුන් පිරිවාරාගෙන ගමන් කරන සිද්ධ බලකාර ගම්භාර සූනිය​ම් දිව්‍ය රාජෝත්තමයාණන් වහන්ස, මේ අසරණ මාගේ කන්නලව්වට දිෂ්​ඨි දිවැස් හෙ​ළා වදාරා නොදැන කළ වරදක් ඇතොත් කමා වී මාගේ අදහස් ඉෂ්ට කර දී වැඩ වදාරන සේක්වා.",
  stotram:
    "ශිව මස්තු නමෝ රාමඃ\nකන්ද සේනා සමාගමඃ\nවඩිග තන්ත්‍ර මණි කණ්ඨඃ\nඔඩ්ඩි මංගල නමෝ නමඃ\n\nඅග්නිඃ ඛන්දන්ච හස්තෙන\nහස්ථෙන වඩිග කර්කතේ\nමුඛේන විෂ සර්පේන\nශිර්ශේ පංච කේෂකේ\n\nඋදරේ නාග බන්දාමි\nනීලෝ තුරඟ වාහනඃ\nසූනියම් දේවතා නාම\nමයිහං පාදකේ නමඃ\n\nනා නා වණ්ණ මහා තේජෝ\nඕදාත භය වාහනෝ\nග්‍රාම සංඤ්චාරකෝ දේවෝ\nඉදං පුංඤනු මොදතු\n\nදා වෙමින් නුවර පඬුවස් නිරිදුන්ට\nතේජසින් තුරඟ වාහන වැඩ ඉන්ට\nමා තුටින් කියන දේ ඉටු කර දෙන්ට\nසූනියම් දේවතාවනි මේ පින් ගන්ට",
};

export default function Home() {
  const { lang } = useLang();

  return (
    <div className="hero-card-container">
      {/* Hero background image */}
      <div className="hero-card-bg" aria-hidden="true" />
      {/* Gradient overlay for text legibility */}
      <div className="hero-card-overlay" aria-hidden="true" />

      {/* Floating header pill */}
      <SiteHeader />

      {/* Scrollable body — hides scrollbar via CSS */}
      <div className="hero-card-body">
        {/* Spacer: exposes deity face, halo and trident */}
        <div className="deity-view-spacer" aria-hidden="true" />

        {/* Prayer text — re-animates on tab switch */}
        <div className="prayer-card fade-up" key={lang}>
          <p
            className={`prayer-text${lang === "stotram" ? " prayer-text--stotram" : ""}`}
            lang="si"
          >
            {PRAYER[lang]}
          </p>
        </div>

        {/* Footer pinned to bottom of scroll container */}
        <SiteFooter />
      </div>

      {/* GSAP ScrollTrigger.batch animations — header pill & footer card */}
      <GsapAnimations />
    </div>
  );
}
