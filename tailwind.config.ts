import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sky: "#e0f2fe",
        blue: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          pale: "#eff6ff",
        },
        mint: {
          DEFAULT: "#10b981",
          pale: "#ecfdf5",
        },
        amber: {
          DEFAULT: "#f59e0b",
          pale: "#fffbeb",
        },
        navy: "#1e3a5f",
        text: "#374151",
        muted: "#6b7280",
        bg: "#f0f7ff",
        card: "#ffffff",
        border: "#dbeafe",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "22px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(37, 99, 235, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
        md: "0 4px 16px rgba(37, 99, 235, 0.1), 0 2px 6px rgba(0, 0, 0, 0.04)",
        lg: "0 8px 32px rgba(37, 99, 235, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
