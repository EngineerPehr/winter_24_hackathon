/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    fontFamily: {
      "arial": ["Arial", "ui-sans-serif", "ui-serif", "system-ui"]
    },
    extend: {
      colors: {
        primary: {
          1: "#000000",
          2: "#F1F0F0",
          3: "#0B1997",
          4: "#6197BE",
        },
        accent: {
          1: "#51565A",
          2: "#022B69",
          background: "D9D9D9"
        },

      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

