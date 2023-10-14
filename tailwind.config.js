const { nextui } = require('@nextui-org/react');
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Merienda: ['Merienda', 'cursive'],
        Raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: '#d9c6bc',
        primary: '#e09eae',
        'base-color': '#ba9f93',
        secondary: '#eab3c0',
        accent: '#a42d49',
      },
    },
  },
  plugins: [nextui()],
};
