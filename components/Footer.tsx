import Link from "next/link";
import type { UiStrings } from "@/data/ui";

interface FooterProps {
  nameEn: string;
  lastUpdated: string;
  ui: UiStrings;
}

export default function Footer({ nameEn, lastUpdated, ui }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 font-sans text-[10.5px] uppercase tracking-eyebrow text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {nameEn}
        </span>
        <span className="hidden sm:inline">
          {ui.labels.lastUpdated} {lastUpdated}
        </span>
        <div className="flex items-center gap-6">
          <Link href={`/${ui.otherLang}`} className="transition-colors hover:text-ink">
            {ui.otherLangLabel}
          </Link>
          <a href="#top" className="transition-colors hover:text-ink">
            {ui.labels.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
