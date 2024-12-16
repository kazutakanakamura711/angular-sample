/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      minWidth: {
        'dn-base-width': '1080px', //メインレイアウトの最小幅
      },
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
        'dn-line': '#707070',
        'dn-outline-border': '#BFBFBF',
        'dn-input': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
