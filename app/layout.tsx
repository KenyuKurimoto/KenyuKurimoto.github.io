import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

/* Latin display face — the voice of every headline. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

/* Latin text face. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kenyukurimoto.github.io"),
  title: "Ken'yu Kurimoto — Robotics Systems Engineer",
  description:
    "Portfolio of Ken'yu Kurimoto. Building service robots that operate as part of buildings, streets and city-scale systems.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23FBFAF7'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='19' text-anchor='middle' fill='%2322384C'%3EK%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Japanese faces are loaded from Google Fonts rather than next/font so that the
          full CJK unicode-range set is served: Shippori Mincho pairs with Instrument
          Serif for display, Noto Sans JP with Inter for text.
        */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@400;500;600&display=swap"
        />
        <noscript>
          {/* Keep every reveal-animated block visible when JS is unavailable. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
