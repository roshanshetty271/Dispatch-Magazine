import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FFFFFF",
          secondary: "#FAFAFA",
          dark: "#0A0A0A",
        },
        text: {
          primary: "#1A1A1A",
          body: "#333333",
          secondary: "#666666",
          muted: "#999999",
        },
        accent: {
          DEFAULT: "#E63946",
          hover: "#C1121F",
        },
        border: {
          light: "#EEEEEE",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        headline: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        subhead: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.8" }],
        body: ["1.125rem", { lineHeight: "1.8" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
        overline: ["0.75rem", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        content: "680px",
        wide: "1080px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "680px",
            color: "#333333",
            lineHeight: "1.8",
            fontSize: "1.125rem",
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            h2: {
              fontFamily: "Instrument Serif, Georgia, serif",
              fontWeight: "400",
              fontSize: "2rem",
              marginTop: "2.5em",
              marginBottom: "0.75em",
              letterSpacing: "-0.02em",
            },
            h3: {
              fontFamily: "Instrument Serif, Georgia, serif",
              fontWeight: "400",
              fontSize: "1.5rem",
              marginTop: "2em",
              marginBottom: "0.5em",
            },
            a: {
              color: "#E63946",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              "&:hover": {
                color: "#C1121F",
              },
            },
            blockquote: {
              fontFamily: "Instrument Serif, Georgia, serif",
              fontStyle: "normal",
              fontSize: "1.5rem",
              fontWeight: "400",
              borderLeftWidth: "0",
              paddingLeft: "0",
              quotes: "none",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
