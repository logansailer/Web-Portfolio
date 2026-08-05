/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0d0f",
          900: "#0e1113",
          800: "#121518",
          700: "#16191c",
          600: "#1c2023",
        },
        line: {
          DEFAULT: "#232a30",
          soft: "#1c2226",
        },
        mist: {
          100: "#ede8dc",
          200: "#c7c3ba",
          300: "#8a929b",
          400: "#5a646d",
          500: "#313a42",
          600: "#2c3338",
        },
        accent: {
          DEFAULT: "#d9663d",
          light: "#e8794e",
          dark: "#b8532f",
        },
        signal: "#00d294",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1600px",
      },
      boxShadow: {
        panel:
          "inset 0 1px 0 0 rgba(237, 232, 220, 0.04), 0 24px 60px -30px rgba(0, 0, 0, 0.7)",
        glass: "0 8px 30px -12px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
