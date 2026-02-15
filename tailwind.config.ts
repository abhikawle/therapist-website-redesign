import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Calming teal/slate
        primary: {
          50: '#f0f7fb',
          100: '#ddeef7',
          200: '#c0deef',
          300: '#9ccde3',
          400: '#71aed5',
          500: '#4a7c8f',
          600: '#3a6577',
          700: '#2d5163',
          800: '#25444e',
          900: '#1f3940',
        },
        // Secondary: Warm beige/cream
        secondary: {
          50: '#faf8f5',
          100: '#f3eee7',
          200: '#e8dcd1',
          300: '#decab9',
          400: '#d4b8a1',
          500: '#c99d7f',
          600: '#b68161',
          700: '#9d6d4f',
          800: '#845a40',
          900: '#6d4a35',
        },
        // Accent: Soft coral/rose
        accent: {
          50: '#fdf5f4',
          100: '#fbe8e5',
          200: '#f7d3cc',
          300: '#f1b3a6',
          400: '#eb9080',
          500: '#e26d59',
          600: '#d5534a',
          700: '#bd3f37',
          800: '#9e3530',
          900: '#832d2b',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
};

export default config;
