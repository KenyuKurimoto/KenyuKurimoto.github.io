"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { UiStrings } from "@/data/ui";

interface NavProps {
  nameEn: string;
  ui: UiStrings;
}

const SECTION_IDS = [
  "about",
  "focus",
  "expertise",
  "work",
  "journey",
  // "contact",  // re-enable once the contact section is back
] as const;

export default function Nav({ nameEn, ui }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = SECTION_IDS.map((id) => ({
    id,
    label: ui.sections[id].eyebrow,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[62px] items-center justify-between md:h-[76px]">
          <Link
            href={`/${ui.lang}`}
            className="group flex items-baseline gap-3 text-ink"
            aria-label={nameEn}
          >
            <span className="font-display text-[19px] leading-none tracking-tight md:text-[21px]">
              K.K
            </span>
            <span className="hidden font-sans text-[10.5px] uppercase tracking-eyebrow text-muted transition-colors duration-300 group-hover:text-ink sm:inline">
              {nameEn}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Sections">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-sans text-[11px] uppercase tracking-eyebrow text-muted transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={`/${ui.otherLang}`}
              className="rounded-full border border-line px-3.5 py-1.5 font-sans text-[10.5px] uppercase tracking-eyebrow text-muted transition-colors duration-300 hover:border-navy/40 hover:text-navy"
            >
              {ui.otherLangLabel}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center lg:hidden"
              aria-label={ui.labels.menu}
              aria-expanded={menuOpen}
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-full bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-height sheet for small screens */}
      <div
        className={`fixed inset-0 z-[60] bg-paper transition-opacity duration-500 ease-editorial lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="shell flex h-[62px] items-center justify-between">
          <span className="font-display text-[19px] leading-none text-ink">K.K</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-[10.5px] uppercase tracking-eyebrow text-muted"
          >
            {ui.labels.close}
          </button>
        </div>

        <nav className="shell mt-10 flex flex-col" aria-label="Sections">
          {items.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-hairline py-5"
            >
              <span className="font-sans text-[10px] tracking-eyebrow text-sand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[26px] leading-none text-ink">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
