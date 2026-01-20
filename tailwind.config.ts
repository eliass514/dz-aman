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
        // Algerian color palette based on mockup
        'aman-beige': {
          light: '#E8DCC8',
          DEFAULT: '#D4C5B0',
        },
        'aman-taupe': {
          light: '#8B8680',
          DEFAULT: '#6B6560',
        },
        'aman-amber': '#D4A054',
        'aman-teal': '#5A7A7A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
