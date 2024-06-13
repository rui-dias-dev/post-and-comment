/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'bridge-in-black': 'var(--bridge-in-black)',
        'bridge-in-green': 'var(--bridge-in-green)',
        'bridge-in-white': 'var(--bridge-in-white)',
        'bridge-in-gray': 'var(--bridge-in-gray)',
        'bridge-in-black-05-opacity': 'var(--bridge-in-black-05-opacity)',
        'bridge-in-black-50-opacity': 'var(--bridge-in-black-50-opacity)',
      },
    },
  },
  plugins: [],
}
