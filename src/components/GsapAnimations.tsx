"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * GsapAnimations
 * Applies GSAP entrance animations to header pill and footer.
 * Listens to language context updates to refresh scroll triggers
 * and ensure footer visibility across tab switches.
 */
export default function GsapAnimations() {
  const { lang } = useLang();

  useEffect(() => {
    // ── 1. Header pill: slide in from top on mount ──────────────────────
    const headerEl = document.querySelector<HTMLElement>(".header-inner");
    if (headerEl) {
      gsap.set(headerEl, { autoAlpha: 0, y: -24 });
      gsap.to(headerEl, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "sine.out",
        delay: 0.1,
      });
    }

    // ── 2. Footer: entrance animation on scroll ──────────────────────────
    const footerTargets = document.querySelectorAll<HTMLElement>(".footer-inner");
    if (footerTargets.length > 0) {
      gsap.set(footerTargets, { autoAlpha: 1, y: 0 });

      ScrollTrigger.batch(footerTargets, {
        scroller: ".hero-card-body",
        start: "top bottom",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.8,
              ease: "sine.out",
              overwrite: "auto",
            }
          ),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Refresh ScrollTrigger and ensure footer visibility on tab switch
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      const footerEl = document.querySelector<HTMLElement>(".footer-inner");
      if (footerEl) {
        gsap.to(footerEl, { autoAlpha: 1, y: 0, duration: 0.3, overwrite: "auto" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [lang]);

  return null;
}
