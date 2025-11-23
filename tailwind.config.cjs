/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.FORCE_THEME ? "class" : "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {

        "picton-blue": {
          50: "var(--color-picton-blue-50)",
          100: "var(--color-picton-blue-100)",
          200: "var(--color-picton-blue-200)",
          300: "var(--color-picton-blue-300)",
          400: "var(--color-picton-blue-400)",
          500: "var(--color-picton-blue-500)",
          600: "var(--color-picton-blue-600)",
          700: "var(--color-picton-blue-700)",
          800: "var(--color-picton-blue-800)",
          900: "var(--color-picton-blue-900)",
          950: "var(--color-picton-blue-950)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
