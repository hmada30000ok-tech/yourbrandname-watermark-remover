import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './i18n/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fa',
          100: '#e9edf3',
          200: '#d3dbe6',
          300: '#b0bed0',
          400: '#8699b3',
          500: '#677d9a',
          600: '#516482',
          700: '#425169',
          800: '#394559',
          900: '#222b3a',
          950: '#141a25',
        },
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec6ff',
          400: '#59a8ff',
          500: '#338bfa',
          600: '#1d6fe1',
          700: '#1758ba',
          800: '#194995',
          900: '#1a3f77',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 26, 37, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
