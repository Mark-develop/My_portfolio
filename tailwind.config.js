/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'main-color': '#00183A',
      'text-primary-color': '#D2D2D2',
      'white': '#ffffff',
      'hover': '#54D2D4',
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'InterOut': ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}

