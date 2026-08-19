/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Slate 950 (Darker)
        foreground: "#F8FAFC", // Slate 50
        card: "rgba(30, 41, 59, 0.85)", // Solid Slate 800 for glassmorphism with high opacity
        "card-border": "rgba(248, 250, 252, 0.1)", // Slate 50 at 10%
        primary: "#1E293B",
        "primary-foreground": "#FFFFFF",
        muted: "#272F42",
        "muted-foreground": "#94A3B8", // Slate 400
        accent: "#38BDF8", // Sober light blue for syntax highlights (instead of neon)
        "accent-secondary": "#10B981", // Emerald for some strings/syntax
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
