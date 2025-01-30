/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        tittle: ['Bokor', 'sans-serif'],
        tit : ['Parkinsans', 'sans-serif'],
        till : ['Faculty Glyphic', 'sans-serif'],
        ti :['Poppins','san-serif']
      }
    },
  },
  plugins: [],
}