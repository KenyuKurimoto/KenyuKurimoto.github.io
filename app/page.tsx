import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ken'yu Kurimoto",
  alternates: { canonical: "/ja/" },
  robots: { index: false, follow: true },
};

/**
 * A static export cannot issue a real 3xx, so the root is a stand-in that bounces to
 * the Japanese page via meta refresh — and still offers a link if that is blocked.
 */
export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/ja/" />
      <main className="shell flex min-h-screen flex-col items-center justify-center gap-6 text-center">
        <p className="font-display text-[28px] leading-none text-ink">Ken&rsquo;yu Kurimoto</p>
        <div className="flex items-center gap-6 font-sans text-[11px] uppercase tracking-eyebrow text-muted">
          <Link href="/ja" className="transition-colors hover:text-ink">
            日本語
          </Link>
          <span className="h-3 w-px bg-line" />
          <Link href="/en" className="transition-colors hover:text-ink">
            English
          </Link>
        </div>
      </main>
    </>
  );
}
