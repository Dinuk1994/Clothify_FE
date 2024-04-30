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
        'btn-color' : '#6BB287',
        'header-color' : '#6BB287'
      },
      fontFamily: {
        'heading': ['Pacifico', 'cursive'],
        'baloo' : ['Baloo Bhaina 2', 'sans-serif']
      },
      screens: {
        'older-mobile': { 'raw': 'screen and (device-aspect-ratio: 40/71)' },
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1223px' },
        'tablet-or-mobile': { 'max': '1224px' },
        'desktop-or-laptop': { 'min': '1224px' },
        'in-portrait': { 'raw': '(orientation: portrait)' },
        'retina': { 'raw': '(min-resolution: 2dppx)' },
      },
    },
  },
  plugins: [],
}

