/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'arial': ["Arial", "ui-sans-serif", "ui-serif", "system-ui"]
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

