/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mordor': {
          900: '#1a0a0a',
          800: '#2d1515',
          700: '#401f1f',
        },
        'shire': {
          100: '#f0f7e6',
          200: '#d4e8b8',
          300: '#a8d16a',
          400: '#7cb518',
        },
        'gondor': {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#cbd5e1',
          600: '#475569',
          800: '#1e293b',
          900: '#0f172a',
        },
        'gold': {
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        }
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

