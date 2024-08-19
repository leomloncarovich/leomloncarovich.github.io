/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif'],
        'poppins-thin': ['Poppins', 'sans-serif'],
        'poppins-light': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

