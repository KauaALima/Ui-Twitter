const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Roboto", "sans-serif"]
      },
      colors: {
        BlueLight: '#1DA1F2',
        BorderLight: '#EBEEF0',
        BorderDarck: '#2F2F2F',
        PlaceHolderColor: '#5B7083',
        Separator: '#F7F9FA',
        TitleColor: '#0F1419',
        SubTitleColor:'#89A2B8'
      },
      plugins: [
        plugin(function({ addVariant }) {
            addVariant('current', '&.active');
        })
    ],
    },
  },
  plugins: [],
}