/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'new-gray' : '#B9B7B7',
        'btn-color' : '#6BB287'
      },
      fontFamily: {
        'heading': ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}

