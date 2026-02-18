/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* Palette aligned with fundedhero.com */
        dark: '#121212',
        'dark-card': '#1A1A1A',
        gold: '#FFC800',
        'gold-light': '#FFD700',
        success: '#32CD32',
        danger: '#EF4444',
        'text-muted': '#AAAAAA',
        'text-muted-light': '#CCCCCC',
      },
    },
  },
  plugins: [],
};
