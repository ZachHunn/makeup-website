/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      shampoo: '#FAD2FC',
      lavenderBlue: '#CCCCFC',
      lavenderWeb: '#E0ECFF',
      ivory: '#FFFEED',
      blanchedAlmond: '#FFEBC9',
      bubbleGum: '#FFC4CD',
      pink: '#ff4ecd',
    },
  },
  plugins: [],
};
