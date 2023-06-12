/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    colors: {
      'orangPuf':'#FF8261',
      'blackPuf':'#424242',
      'whitePuf':'#fff',
      'black': '#000',
      'whiteCheckbox': '#F0F0F0',
      'graySearch':'#EDEDED',
      'grayLabel': '#7B7B7B',
      'grayBorder': '#979797',
      'grayCheckbox': '#939393',
      'grayPlaceholder': '#C7C7C7',
      'grayHoverDropdown': '#636363',
      'redAlert': '#FF5252',
      'greenAlert': '#77EF4D',
      'blueLink': '#53CBFF',
      'transparent':'rgb(196,196,196,0)'
    },
    extend: {},
  },
  plugins: [],
};

