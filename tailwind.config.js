/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5F6F52',
        secondary: '#A9B388',
        tertiary: '#FEFAE0',
        accent: '#B99470',
      },
    },
  },
  plugins: [],
};
