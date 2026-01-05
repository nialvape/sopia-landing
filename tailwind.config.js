/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        russian_violet: {
          50: '#f8f6f9',
          100: '#f0ebf3',
          200: '#e3dae9',
          300: '#cfc0d9',
          400: '#b49cc4',
          500: '#9b7bb0',
          600: '#85629a',
          700: '#735285',
          800: '#60466e',
          900: '#513d5c',
          950: '#462255', // DEFAULT
        },
        delft_blue: {
          50: '#f4f6f9',
          100: '#e9edf2',
          200: '#d7e0e8',
          300: '#bbcbd9',
          400: '#99b0c6',
          500: '#7f97b6',
          600: '#6b82a6',
          700: '#5f7297',
          800: '#52617c',
          900: '#455165',
          950: '#313b72', // DEFAULT
        },
        mint: {
          50: '#f0fbf4',
          100: '#dcf7e4',
          200: '#bceecb',
          300: '#8ee0a5',
          400: '#62a87c', // DEFAULT
          500: '#3fb866',
          600: '#2e9751',
          700: '#267a42',
          800: '#236137',
          900: '#1f5030',
          950: '#0d2c18',
        },
        light_green: {
          50: '#f0fef2',
          100: '#dcfce1',
          200: '#bbf7c5',
          300: '#86ef99',
          400: '#7ee081', // DEFAULT
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        tea_green: {
          50: '#f0fef2',
          100: '#dcfce1',
          200: '#c3f3c0', // DEFAULT
          300: '#86ef99',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

