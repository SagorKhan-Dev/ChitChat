/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      colors:{
        'shadow' : ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
        'overlay' : 'rgba(0, 0, 0, 0.41);'
      }
    },
  },
  plugins: [],
}