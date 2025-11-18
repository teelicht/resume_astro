/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.FORCE_THEME ? "class" : "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'tl-bluegray': {
          50: 'var(--color-tl-bluegray-50)',
          100: 'var(--color-tl-bluegray-100)',
          200: 'var(--color-tl-bluegray-200)',
          300: 'var(--color-tl-bluegray-300)',
          400: 'var(--color-tl-bluegray-400)',
          500: 'var(--color-tl-bluegray-500)',
          600: 'var(--color-tl-bluegray-600)',
          700: 'var(--color-tl-bluegray-700)',
          800: 'var(--color-tl-bluegray-800)',
          900: 'var(--color-tl-bluegray-900)',
          950: 'var(--color-tl-bluegray-950)',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
