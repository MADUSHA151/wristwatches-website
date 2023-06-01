/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"
    , "./src/layouts/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,jsx,ts,tsx}", "./src/common/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        "g-theme-color": "#13171C",
        "t-blue-color": "#3C4159",
        "side-bar-navigation": "#242C32",
        "button-color": "#0071FF",
        "input-color": "#ADAEB0",
      },
      colors: {
        "star-color": "#F8D711",
        "blue-blur-color": "#696E72",
        "white-color": "#FFFFFF",
        "font-green-color": "#11A34B",
        "f-red-color": "#9B1515",
        "t-watch-color": "#ADAEB0",
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

