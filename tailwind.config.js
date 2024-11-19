/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D3E97A',
        black: {
          100: '#1A1A1A',
          200: '#222222',
          DEFAULT: '#0A0A0A',
        },
        white: {
          300: '#C7C7C7',
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        inter: `var(--font-inter)`,
        default: `var(--font-primary)`,
      },
    },
  },
  plugins: [],
};
