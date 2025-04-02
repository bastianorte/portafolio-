/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      primary: colors.indigo,
      secondary: colors.yellow,
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        'sans': ['Jost', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}