/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F1B35',
        'navy-light': '#1A2A4A',
        blue: '#4A6FA5',
        'blue-light': '#5A82BE',
        'text-white': '#FFFFFF',
        'text-secondary': '#8A9BB5',
        green: '#4CAF82',
        orange: '#E8A87C',
        red: '#D9706A',
      },
      fontFamily: {
        title: ['"Barlow Condensed"', 'sans-serif'],
        subtitle: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', '"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
