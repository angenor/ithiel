/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'udemy-purple': '#A435F0',
        'udemy-dark-purple': '#8710D8',
      }
    },
  },
  plugins: [],
}
