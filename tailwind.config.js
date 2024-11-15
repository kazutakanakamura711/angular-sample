/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'dn-layer-1': '#EDEDED',
        'dn-layer-2': '#F7F7F7F7',
        'dn-layer-3': '#FFFFFF',
        'dn-layer-1-dark': '#0F0F0F',
        'dn-layer-2-dark': '#272727',
        'dn-layer-3-dark': '#434343',
        'dn-primary-1': '#106ACC',
        'dn-primary-2': '#0686C9',
        'dn-primary-3': '#032A58',
        'dn-outline-border': '#BFBFBF',
      },
    },
  },
  plugins: [],
};
