/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        "robotoMono": ["Roboto Mono", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
