import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* --- surfaces --------------------------------------------------- */
        paper: "#FBFAF7", // warm off-white : page ground
        canvas: "#FFFFFF", // pure white    : cards
        mist: "#F3F0EA", // quiet band / media ground
        /* --- ink -------------------------------------------------------- */
        ink: "#16171A", // headings
        body: "#3C3E44", // paragraphs
        muted: "#8B887F", // meta, captions
        /* --- lines & accents -------------------------------------------- */
        line: "#E5E1D8",
        hairline: "#EFECE4",
        navy: "#22384C", // restrained accent
        sand: "#B8A78C", // warm secondary, used sparingly
      },
      fontFamily: {
        display: ["var(--font-display)", "Shippori Mincho", "Yu Mincho", "serif"],
        sans: ["var(--font-sans)", "Noto Sans JP", "Hiragino Sans", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        wide: "0.08em",
      },
      maxWidth: {
        shell: "1240px",
        measure: "64ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 23, 26, 0.03), 0 12px 32px -18px rgba(22, 23, 26, 0.16)",
        lift: "0 2px 4px rgba(22, 23, 26, 0.04), 0 24px 48px -24px rgba(22, 23, 26, 0.22)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
