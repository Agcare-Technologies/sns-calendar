/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sm-dec": "url('mobile/Group 412-dec.jpg')",
        "xl-dec": "url('desktop/Group 387.png')",
      }
    },
  },
  plugins: [],
}

