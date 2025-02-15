import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)", // Add this if you're using a primary color
      },
      animation: {
        // Custom animations
        typing: "typing 2s steps(40, end)",
        "fade-in": "fade-in 1.5s ease-in-out forwards",
        bounce: "bounce 0.5s ease-in-out",
      },
      keyframes: {
        // Keyframes for custom animations
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;